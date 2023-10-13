import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const filePath = fileURLToPath(new URL("../db/db.json", import.meta.url));

const getDB = async () => {
    const db = await fs.readFile(filePath, "utf-8");
    const parsed = await JSON.parse(db);
    return parsed;
}

const saveDB = async (db) => {
    await fs.writeFile(filePath, JSON.stringify(db, null, 2));
    return db;
}

export const insert = async (data) => {
    const db = await getDB()
    db.notes.push(data)
    await saveDB(db)
    return data 
  }

// const writeFile = async () => {
//     const newFilePath = fileURLToPath(new URL("../db/demo.txt", import.meta.url));
//     const file = await fs.writeFile(newFilePath, "console.log('yoox')", "utf-8");
//     console.log(file);
// }

export { 
    insert
}