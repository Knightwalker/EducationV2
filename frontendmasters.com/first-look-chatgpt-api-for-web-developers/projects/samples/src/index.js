"use strict";

import "./configs/env.config.js";
import express from "express";
import cors from "cors";
import routerInstance from "./routes.js";

// Configure the server
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(routerInstance);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});