const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000

const limiter = rateLimit({
    windowMs:4000,
    max: 3,
    message: 'Too many requests, please try again after a second.',
    statusCode: 429,
    headers: true,
    handler: (req, res) => {
        res.status(429).json({ message: 'Custom handler You have exceeded the limit!' + req.ip });
    },
    skip: (req) => {
        const skipUrls = ['/status', '/languages']
        return skipUrls.includes(req.path)
    }
})

app.use(limiter)

app.use('/status', (req, res) => {
    res.send(['Success', 'Fail', 'Pending', 'Processing'])
})

app.use('/languages', (req, res) => {
    res.send(['Java', 'JavaScript',  'Python', 'C++'])
})

app.use('/frameworks', (req, res) => {
    res.send(['Express',  'ReactJS', 'NextJs', 'NestJS'])
})

app.use('/', (req, res) => {
    res.send("Welcome to api")
})



app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})