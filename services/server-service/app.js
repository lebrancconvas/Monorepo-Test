const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to Server');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});