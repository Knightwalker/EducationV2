import db from "../../data/db.json" assert { type: "json" };

const getIssues = (req, res) => {
    const { issues } = db;
    return res.status(200).send(issues);
}

const getMovies = (req, res) => {
    const movies = db.movies;
    return res.status(200).send({ movies: movies });
}

const getMovieById = (req, res) => {
    const id = req.query.id;
    const movie = db.movies.filter(movie => movie.id === id);

    if (movie.length <= 0) {
        return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).send({ movie: movie[0] });
}

const getRandomMovie = async (req, res) => {
    const movies = db.movies;

    // Check if there are any movies in the database
    if (movies.length === 0) {
        return res.status(404).send({ message: "No movies found" });
    }

    // Get a random movie from the list of movies
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    // Send the random movie in the response
    return res.status(200).send({ movie: randomMovie });
}

export {
    getIssues,
    getMovies,
    getMovieById,
    getRandomMovie
}