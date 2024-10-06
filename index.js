const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000


app.use('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})