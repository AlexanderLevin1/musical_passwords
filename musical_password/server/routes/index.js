const app = require('express').Router();
module.exports = app;

app.use('/users', require('./users'));
app.use('/levels', require('./levels'));