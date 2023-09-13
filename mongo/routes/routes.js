const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'title' })
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add', (req, res) => {
    const subject = req.body.Subject
    console.log("🚀 ~ file: routes.js:14 ~ router.post ~ subject:", subject)
})

module.exports = router