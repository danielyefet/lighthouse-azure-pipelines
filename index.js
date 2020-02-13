const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, I am a website!'));

app.listen(port, (error) => console.log(error || `Listening on port ${port}`));