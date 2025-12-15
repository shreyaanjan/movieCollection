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

module.exports = {
    clientPage
}