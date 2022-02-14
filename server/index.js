const express = require("express");
const axios = require('axios');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})