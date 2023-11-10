const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send('Hello, Im here')
});

app.listen(3000, () => {
    console.log('Server töötab 3000 serveril')
});