const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true })
);

app.get('/', (request, response) => {
    response.json({ info: 'HOME'});
});

const service = require('./services/service');

app.get('/investors', service.getAllInvestors);
app.get('/investors/:id', service.getInvestorById);
app.post('/investors', service.createInverstor);
app.delete('/investors/:id', service.deleteInversor);

app.post('/investors/upload', service.uploadDocs);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

