const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs') 



app.get("/", (req, res) => {
    res.render("index", {name: "bub"})
})

app.listen(3000) 