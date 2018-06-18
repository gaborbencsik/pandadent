const express = require('express');
const path = require('path');
const router = express.Router();
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const _ = require('lodash');
const fetch = require('node-fetch');

const key = '1p-cbPPmYaDmHrG2D0rz3ryhwQao4N_oUbLumgwrJdS4';

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(serveStatic(__dirname + "/dist"));
const server = app.listen(process.env.PORT || 4516, () => {
  console.log(`Server is running on ${server.address().port}`);
});
