const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'EJS Demo Page!', message: 'Hello from EJS!' });
});

const PORT = 3040;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});