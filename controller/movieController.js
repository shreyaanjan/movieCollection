const Movie = require("../models/movieModel.js");

const allMovie = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.render('index.ejs', {
            movies
        })
    } catch (error) {
        console.log(error);
    }
}

const getMovieForm = (req, res) => {
    try {
       return res.render('addMovie.ejs')
    } catch (error) {
        console.log(error);
    }
}

const addMovie = async (req, res) => {
    try {
        const data = req.body;
        const doc = req.file.path;
        const movie = {
            ...data, file: doc
        }

        const newMovie = new Movie(movie)
        await newMovie.save()
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

const deleteMovie = async (req, res) => {

}

const editMovie = async (req, res) => {

}

const updateMovie = async (req, res) => {

}

module.exports = {
    allMovie, getMovieForm, addMovie, deleteMovie, editMovie, updateMovie
}