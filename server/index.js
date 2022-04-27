const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

app.get('/js', () => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'))
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})