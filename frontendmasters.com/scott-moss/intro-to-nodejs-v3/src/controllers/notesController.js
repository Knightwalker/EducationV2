import { saveDB, getDB, insertDB } from "../services/dbService";

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

export {
    newNote,
    getAllNotes
}