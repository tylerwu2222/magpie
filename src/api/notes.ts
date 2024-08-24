import { entryDataType, newEntryDataType, setEntryDataType } from "@/src/types/data";


// function for getting all notes
export const fetchNotes = async () => {
  try {
    const response = await fetch('http://localhost:5000/notes');
    const data = await response.json();
    // console.log('fetch all data', data);
    return data;
    // setLoading(false);
  } catch (error) {
    console.error('Error fetching notes:', error);
    // setLoading(false);
  }
  return [];
};

export const getNoteByIDLocal = (
  displayedNotes: Array<entryDataType>,
  noteId: number | undefined
) => {
  return displayedNotes.find(note => note.id == noteId);
}

// function for getting note by ID
const getNoteByID = async (
  noteId: number | undefined
) => {
  try {
    const response = await fetch(`http://localhost:5000/notes/${noteId}`,
      {
        method: 'GET'
      }
    );// Handle the response
    if (response.ok) {
      const data = await response.json();
      // console.log('Got note with ID', noteId, data);
      return data;
    } else {
      console.error('Failed to get note with ID', noteId);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// function for adding new note
export const addNote = async (
  newNoteContent: newEntryDataType
) => {

  // get update time
  const create_update_time = new Date();

  const newNote = {
    user_id: newNoteContent.user_id,
    title: newNoteContent.title,
    subtitle: newNoteContent.subtitle,
    description: newNoteContent.description,
    created_at: create_update_time,
    updated_at: create_update_time
  }
  // console.log('adding new note with data', newNote);
  try {
    const response = await fetch(`http://localhost:5000/notes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
      },

    );// Handle the response
    if (response.ok) {
      const data = await response.json();
      // console.log('addNote data:', data);
      return data;
    } else {
      console.error('Failed to add new note');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// function for updating a note by ID
export const updateNoteByID = async (
  noteId: number | undefined,
  columnName: string,
  newContent: string,
  // originalContent: entryDataType
) => {

  // get most up-to-date original content by getting note by ID
  const originalNote = await getNoteByID(noteId);
  // console.log('updating row:', noteId, 'column:', columnName, newContent);

  // get update time
  const update_time = new Date();

  // define updated note JSON content
  // 
  const updatedNote = {
    ...originalNote,
    [columnName]: newContent,
    'updated_at': update_time
  };

  try {
    const response = await fetch(`http://localhost:5000/notes/${noteId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNote)
      }
    );// Handle the response
    if (response.ok) {
      const data = await response.json();
      return data;
      // console.log('Note updated:', data);
    } else {
      console.error('Failed to update note with ID', noteId);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const deleteNoteByID = async (
  noteId: number | undefined,
) => {

  try {
    const response = await fetch(`http://localhost:5000/notes/${noteId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );// Handle the response
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to delete note with ID', noteId);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
