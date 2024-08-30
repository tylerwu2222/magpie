import { supabase } from "@/lib/supabase";
import { entryDataType, newEntryDataType, setEntryDataType } from "@/src/types/data";
import { getSessionUserID } from "../providers/UserProvider/UserProvider";


// user for all route handlers
// const userID = useUser();

// function for getting all notes
export const fetchNotes = async () => {
  const userID = await getSessionUserID();
  try {
    const { data, error } = await supabase
      .from('notes')
      .select()
      .eq('user_id', userID)
      .order('updated_at', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching notes from supabase', error);
  }
  return [];
};

export const getNoteByIDLocal = (
  displayedNotes: Array<entryDataType>,
  noteID: number | undefined
) => {
  return displayedNotes.find(note => note.id == noteID);
}

// function for getting note by ID
const getNoteByID = async (
  noteID: number | undefined
): Promise<entryDataType | undefined> => {

  // const userID = await getSessionUserID();
  // console.log('getting note by ID', noteID);
  try {
    const { data, error } = await supabase
      .from('notes')
      .select()
      // .eq('user_id', userID)
      .eq('id', noteID)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting note with id', noteID, error);
  }
}

// function for adding new note
export const addNote = async (
  newNoteContent: newEntryDataType
) => {

  const userID = await getSessionUserID();

  // get update time
  const create_update_time = new Date();

  const newNote = {
    user_id: userID,
    title: newNoteContent.title,
    subtitle: newNoteContent.subtitle,
    description: newNoteContent.description,
    created_at: create_update_time,
    updated_at: create_update_time
  }
  // console.log('adding new note with data', newNote);
  try {
    const { data, error } = await supabase
      .from('notes')
      .insert(newNote);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error inserting data', error);
  }
};

// function for updating a note by ID
export const updateNoteByID = async (
  noteID: number | undefined,
  columnName: string,
  newContent: string,
  // originalContent: entryDataType
) => {

  // console.log('updating row:', noteID, 'column:', columnName, newContent);

  // define updated note JSON content
  const updatedNote = {
    [columnName]: newContent
  };
  // console.log('update note', updatedNote);

  try {
    const { data, error } = await supabase
      .from('notes')
      .update(updatedNote)
      .eq('id', noteID);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating note with id', noteID, error);
  }
}

export const deleteNoteByID = async (
  noteID: number | undefined,
) => {

  try {
    const { data, error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteID);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error deleting note with id', noteID, error);
  }
};


// function for duplicating note by ID
export const duplicateNoteByID = async (
  noteID: number | undefined
) => {

  const originalNote = await getNoteByID(noteID);

  // isolate note content, remake id and update at
  const { id, updated_at, created_at, ...noteContent } = originalNote;

  // Get the current time to set as the creation time for the duplicated note
  const creationTime = new Date();

  // Create the duplicated note object
  const duplicatedNote = {
    ...noteContent,
    created_at: creationTime,
    updated_at: creationTime,
  };

  try {
    const { data, error } = await supabase
      .from('notes')
      .insert(duplicatedNote);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
