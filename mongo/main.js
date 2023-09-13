const express = require('express')

const app = express()

app.use('/static', express.static('public'));

app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})