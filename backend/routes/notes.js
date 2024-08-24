const express = require('express');
const router = express.Router()

const db = require('../config/db.js');


// updating note by ID
router.route('/:noteId')
    .get(async (req, res) => {
        const noteId = req.params.noteId;

        try {
            // get note by ID
            const result = await db.query(
                'SELECT * FROM notes WHERE id = $1',
                [noteId]
            );
            
            if (result.rows.length > 0) {
                res.status(200).json(result.rows[0]); // Return the updated note
            } else {
                res.status(404).json({ error: 'Note not found' }); // Handle the case where the note ID doesn't exist
            }
        } catch (error) {
            console.error('Error getting note:', error);
            res.status(500).json({ error: 'Failed to get note' });
        }
    })
    .put(async (req, res) => {
        const noteId = req.params.noteId;
        const { title, subtitle, description, updated_at } = req.body; // Extract the updated data from the request body

        try {
            // Update the note in the database
            const result = await db.query(
                'UPDATE notes SET title = $1, subtitle = $2, description = $3, updated_at = $4 WHERE id = $5 RETURNING *',
                [title, subtitle, description, updated_at, noteId]
            );

            if (result.rows.length > 0) {
                res.status(200).json(result.rows[0]); // Return the updated note
            } else {
                res.status(404).json({ error: 'Note not found' }); // Handle the case where the note ID doesn't exist
            }
        } catch (error) {
            console.error('Error updating note:', error);
            res.status(500).json({ error: 'Failed to update note' });
        }
    })
    .delete(async (req, res) => {
        const noteId = req.params.noteId; // Extract the id from the request parameters

        try {
            // Delete the note with the specified id from the database
            const result = await db.query(
                'DELETE FROM notes WHERE id = $1 RETURNING *',
                [noteId]
            );
            // console.log('deleting row nubmer rows', result.rowCount)
            // If the note was found and deleted, return it
            if (result.rows.length > 0) {
                res.status(200).json(result.rows[0]);
            } else {
                // If no note was found with the given id, return a 404 error
                res.status(404).json({ error: 'Note not found' });
            }
        } catch (error) {
            console.error('Error deleting note:', error);
            res.status(500).json({ error: 'Failed to delete note' });
        }

    });


// get all notes
router.route('/')
    .get(async (req, res) => {
        try {
            const result = await db.query('SELECT * FROM notes ORDER BY updated_at DESC;');
            // console.log('fetch all notes number notes:', result.rowCount);
            res.status(200).json(result.rows);
        } catch (err) {
            // console.error('Error fetching notes:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    })
    .post(async (req, res) => {
        const { user_id, title, subtitle, description } = req.body; // Extract the data for the new note
        // console.log('posting new note in BE',req.body)
        try {
            // Insert the new note into the database
            const result = await db.query(
                'INSERT INTO notes (user_id, title, subtitle, description, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
                [user_id, title, subtitle, description]
            );

            // Return the newly created note
            // console.log('adding new note', result.rowCount);
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Error creating note:', error);
            res.status(500).json({ error: 'Failed to create note' });
        }
    });

module.exports = router;