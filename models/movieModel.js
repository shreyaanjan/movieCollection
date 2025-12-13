const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    }
})

const Movie = new mongoose.model('Movie', movieSchema)
module.exports = Movie