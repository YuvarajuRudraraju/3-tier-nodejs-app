const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the Frontend!");
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});