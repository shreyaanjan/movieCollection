const Movie = require("../models/movieModel.js");
const fs = require("fs");
const path = require("path");

const allMovie = async (req, res) => {
    try {
        const movies = await Movie.find({})
        return res.render('index.ejs', {
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
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        const imgPath = path.join(__dirname, "..", movie.file)

        fs.unlink(imgPath, (err) => {
            console.log(err);
        })

        await Movie.findByIdAndDelete(id)
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

const editMovie = async (req, res) => {
    try {
        const { id } = req.params
        const editMov = await Movie.findById(id)
        return res.render('editMovie.ejs', {
            editMov
        })
    } catch (error) {
        console.log(error);
    }
}

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        const updatedData = req.body

        if (req.file) {
            const oldImgPath = path.join(__dirname, "..", movie.file)
            fs.unlink(oldImgPath, (err) => {
                console.log(err);
            })

            const newImgPath = req.file.path
            updatedData.file = newImgPath
        }

        await Movie.findByIdAndUpdate(id, updatedData)
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

const description = async (req, res) => {
    try {
        const { id } = req.params
        const movies = await Movie.findById(id)
        return res.render('description', {
            movies
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    allMovie, getMovieForm, addMovie, deleteMovie, editMovie, updateMovie, description
}