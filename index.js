const dotEnv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const birthdaysRoute = require('./src/routes/birthdays');
const activeDirRoute = require('./src/controllers/active-directory');

const app = express();

dotEnv.config();

mongoose.connect(process.env.MONGO_DB_URL);

app.route('/')
    .get((req, res) => {
        res.send('Hello World!')
    });

app.use('/birthdays', birthdaysRoute);
app.use('/dir', activeDirRoute);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
