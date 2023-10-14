import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { newNote, getAllNotes, findNotes, removeNote, removeAllNotes } from "./controllers/notesController.js";
import { listNotes } from "./utils/funcs.js";

yargs(hideBin(process.argv))
    .usage("Usage: note <command> [options]")
    .scriptName("note")
    .command("new <note>", "create a new note", yargs => {
        return yargs.positional("note", {
            describe: "The content of the note you want to create",
            type: "string"
        })
    }, async (argv) => {
        const tags = argv.tags ? argv.tags.split(",") : [];
        const note = await newNote(argv.note, tags);
        console.log("Note added!", note.id);
    })
    .option("tags", {
        alias: "t",
        type: "string",
        description: "tags to add to the note"
    })
    .command("all", "get all notes", () => { }, async (argv) => {
        const notes = await getAllNotes();
        listNotes(notes);
    })
    .command("find <filter>", "get matching notes", yargs => {
        return yargs.positional("filter", {
            describe: "The search term to filter notes by, will be applied to note.content",
            type: "string"
        })
    }, async (argv) => {
        const filter = await findNotes(argv.filter);
        listNotes(filter);
    })
    .command("remove <id>", "remove a note by id", yargs => {
        return yargs.positional("id", {
            type: "number",
            description: "The id of the note you want to remove"
        })
    }, async (argv) => {
        const id = await removeNote(argv.id);
        if (id) {
            console.log(`Removed: ${id}`);
        } else {
            console.log(`ID: ${argv.id} not found!`);
        }
    })
    .command("clean", "remove all notes", () => { }, async (argv) => {
        await removeAllNotes();
        console.log("db reset");
    })
    .command("web [port]", "launch website to see notes", yargs => {
        return yargs
            .positional("port", {
                describe: "port to bind on",
                default: 5000,
                type: "number"
            })
    }, async (argv) => {

    })
    .demandCommand(1)
    .parse()