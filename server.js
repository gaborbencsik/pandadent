const express = require('express');
const path = require('path');
const router = express.Router();
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const gsjson = require('google-spreadsheet-to-json');
const engines = require('consolidate');
const _ = require('lodash');

const key = '1p-cbPPmYaDmHrG2D0rz3ryhwQao4N_oUbLumgwrJdS4';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('public/lib'))
app.use(express.static('public/assets'))

app.engine('hbs', engines.handlebars);
app.set('views', './public');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  gsjson({
    spreadsheetId: key,
    hash: 'field',
    worksheet: ['Content', 'Images']
  })
  .then(function(result) {
    res.render('index', { data: result[0], images: result[1] }) })
  .catch(function(err) {
    console.log(err.message);
    // res.render('error')
  });
})

const server = app.listen(process.env.PORT || 4515, function() {
  console.log(`Server is running on ${server.address().port}`);
});
