'use strict';

const server = require('./src/server.js');

// Start up DB Server
const mongoose = require('mongoose');

require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI;
let PORT = process.env.PORT;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, options);

// Start the web server
server.start(PORT);