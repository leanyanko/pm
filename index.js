const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true })
);

app.get('/', (request, response) => {
    response.json({ info: 'HOME'});
});

const service = require('./service');

app.get('/investors', service.getAllInvestors);
app.get('/investors/:id', service.getInvestorById);
app.post('/investors', service.createInverstor);
app.delete('/investors/:id', service.deleteInversor);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

