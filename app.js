const express = require('express');
const rateLimit = require('express-rate-limit');


const app = express();
const PORT = process.env.PORT || 3000

const limiter = rateLimit({
    windowMs:4000,
    max: 3,
    message: 'Too many requests, please try again after a second.'
})


app.use(limiter)

app.use('/', (req, res) => {
    res.send("Welcome to api")
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})