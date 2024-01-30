"use strict";

import "./configs/env.config.js";
import "./configs/db.config.js";
import express from "express";
import cors from "cors";
import routerInstance from "./routes.js";

const PORT = process.env.PORT;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

const app = express();
app.use(cors({
    origin: [CLIENT_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.static("public"));
app.use(express.json());
app.use(routerInstance);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
});
