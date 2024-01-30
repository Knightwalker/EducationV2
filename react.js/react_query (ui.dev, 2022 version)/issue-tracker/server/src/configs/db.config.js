import db from "../data/db.json" assert { type: "json" };
import { issues } from "../data/issues.data.seeder.js";

// Seed data
db.issues = issues;