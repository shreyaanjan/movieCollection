const express = require('express')
const { allMovie, getMovieForm, addMovie, deleteMovie, editMovie, updateMovie } = require('../controller/adminController.js')
const upload = require('../middlewares/multer.js')
const router = express.Router()

router.get('/', allMovie)
router.get('/add-movie', getMovieForm)
router.post('/add-movie', upload.single('file'), addMovie)
router.get('/delete-movie/:id', deleteMovie)
router.get('/edit-movie/:id', editMovie)
router.post('/edit-movie/:id', upload.single('file'), updateMovie)

module.exports = router