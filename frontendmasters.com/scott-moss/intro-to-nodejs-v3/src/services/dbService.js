import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const DB_PATH = fileURLToPath(new URL("../db/db.json", import.meta.url));

const getDB = async () => {
    const db = await fs.readFile(DB_PATH, "utf-8");
    const parsed = await JSON.parse(db);
    return parsed;
}

const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
}

const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}

// const writeFile = async () => {
//     const newFilePath = fileURLToPath(new URL("../db/demo.txt", import.meta.url));
//     const file = await fs.writeFile(newFilePath, "console.log('yoox')", "utf-8");
//     console.log(file);
// }

export {
    getDB,
    saveDB,
    insertDB
}