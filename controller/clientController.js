const Movie = require("../models/movieModel.js");

const clientPage = async (req, res) => {
    try {
        const movies = await Movie.find({})
        return res.render('home.ejs', {
            movies
        })
    } catch (error) {
        console.log(error);
    }
}

const descPage = async (req, res) => {
    try {
        const { id } = req.params
        const movies = await Movie.findById(id)
        return res.render('desc', {
            movies
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    clientPage, descPage
}