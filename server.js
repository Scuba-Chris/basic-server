'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

//routes

app.get('/hello', (request, response) => {
    response.send('hello');
})

app.get('/data', (request, response) => {
    let chris = {
        name: 'Chris',
        hair: 'Brown',
        eyes: 'brown',
        favoriteFood: 'curry',
        favoriteDrink: 'BEER'
    }
    response.status(200).json(chris);
})

app.use('*', (request, response) => {
    response.status(404).send('Sorry, that route does not exsist');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));