const price = require('crypto-price')

const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

price.getCryptoPrice('USD', 'BTC')
.then((result) => {
    console.log(result)
}) 
.catch((err) => {
    console.log(err)
})
