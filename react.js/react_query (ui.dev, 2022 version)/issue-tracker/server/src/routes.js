import express from "express";
import { 
    getIssues, 
    getMovies, 
    getMovieById, 
    getRandomMovie 
} from "./modules/home/home.controller.js";

const routerInstance = express.Router();

// Define routes
routerInstance.get("/api/issues", getIssues)
routerInstance.get("/api/home/movies", getMovies);
routerInstance.get("/api/home/movie", getMovieById);
routerInstance.get("/api/home/random-movie", getRandomMovie);

// Export router for use in main application
export default routerInstance;