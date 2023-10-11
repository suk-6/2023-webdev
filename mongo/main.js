const express = require('express')
const mongoose = require('mongoose')

const app = express()

// DB Connection
mongoose.connect('mongodb://localhost:27017/notes-app');

app.use('/static', express.static('public'));

app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})