const express = require('express');
const path = require('path');
const router = express.Router();
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const gsjson = require('google-spreadsheet-to-json');
const engines = require('consolidate');
const _ = require('lodash');
const emailValidator = require('email-validator');
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

const key = '1p-cbPPmYaDmHrG2D0rz3ryhwQao4N_oUbLumgwrJdS4';

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('public/lib'))
app.use(express.static('public/assets'))

app.engine('hbs', engines.handlebars);
app.set('views', './public');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // gsjson({
  //   spreadsheetId: key,
  //   hash: 'field',
  //   worksheet: ['Content', 'Images']
  // })
  // .then(function(result) {
  //   res.render('index', { data: result[0], images: result[1] }) })
  // .catch(function(err) {
  //   console.log(err.message);
  //   // res.render('error')
  // });

  let data = {
    title: 'Dr. Kovács Anna gyermek- és felnőttfogorvos',
    makeAppointment: 'Idöpont kérés'
  };

  res.render('index', {data})
})

app.post('/appointment', (req, res) => {
  let isHeaderExist = req.headers['x-panda'] == 'OK'

  if (!isHeaderExist) {
    res.status(401).send({success: false})
  } else {
    let body = JSON.stringify(req.body)

    fetch(process.env.ZAPIER_URL, { method: 'POST', body: body, headers: { 'Content-Type': 'application/json', 'X-Recurse-Parse': false }, })
      .then(res => res.json())
      .then(json => console.log('json', json));

    res.send({success: true})
  }
})

const server = app.listen(process.env.PORT || 4515, function() {
  console.log(`Server is running on ${server.address().port}`);
});
