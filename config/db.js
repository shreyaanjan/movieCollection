const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/movieInfo"

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully.");
        })
        await mongoose.connect(mongoURI)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb