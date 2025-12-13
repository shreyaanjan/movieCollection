const express = require("express")
const connectDb = require("./config/db.js")
const adminRouter = require("./routes/adminRoutes.js")

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))

connectDb()

app.use('/admin', adminRouter)

app.listen(PORT, (err) => {
    console.log(`Server is running at http://localhost:${PORT}`);
    if (err) console.log("Server is down.");
})