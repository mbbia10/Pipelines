const express = require('express');
const healthCheck = require('./routes/health');

const app = express();

app.get('/health', healthCheck);

module.exports = app;
