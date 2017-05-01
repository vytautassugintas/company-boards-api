const express = require('express');
const mongoose = require('mongoose');

const birthdaysRoute = require('./src/routes/birthdays');

const app = express();

const dbName = 'comp-boards';

mongoose.connect('localhost:27017/' + dbName);

app.route('/')
    .get((req, res) => {
        res.send('Hello World!')
    });

app.use('/birthdays', birthdaysRoute);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
