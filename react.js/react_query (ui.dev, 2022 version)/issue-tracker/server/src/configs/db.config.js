import db from "../data/db.json" assert { type: "json" };
import { issues, users } from "../data/issues.data.seeder.js";

// Seed data
db.users = users;
db.issues = issues;