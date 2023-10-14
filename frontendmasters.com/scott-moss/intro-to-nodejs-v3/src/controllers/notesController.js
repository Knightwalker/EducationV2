import { saveDB, getDB, insertDB } from "../services/dbService.js";

const newNote = async (note, tags) => {
    const newNote = {
        tags: tags,
        content: note,
        id: Date.now()
    }

    await insertDB(newNote);

    return newNote;
}

const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
}

const findNotes = async (filter) => {
    const notes = await getAllNotes();
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

const removeNote = async (id) => {
    const notes = await getAllNotes();
    const match = notes.find(note => note.id === id);

    if (match) {
        const newNotes = notes.filter(note => note.id !== id);
        await saveDB({ notes: newNotes });
        return id;
    }
}

const removeAllNotes = async () => {
    await saveDB({ notes: []});
}

export {
    newNote,
    getAllNotes,
    findNotes,
    removeNote,
    removeAllNotes
}