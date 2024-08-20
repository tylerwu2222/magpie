const express = require('express');
const router = express.Router()

const db = require('../config/db.js');

// get all notes
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM notes');
        // console.log('notes results');
        res.status(200).json(result.rows);
    } catch (err) {
        // console.error('Error fetching notes:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/new', (req, res) => {
    res.send('create new user')
})

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

module.exports = router;