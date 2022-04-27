const express = require('express');
const path = require('path');

const app = express();

app.use('/js', express.static(path.join(__dirname, '../public/css/syles.css')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})