#!/usr/bin/env node
import { count } from "./utils/funcs.js";
import { readFile } from "node:fs/promises";

import * as dns from "node:dns/promises";

const note = process.argv[2];

const newNote = {
    id: Date.now(),
    content: note
}

async function rf () {
    const test = await dns.resolveNs("nodejs.org");
    console.log(test);
}

rf();