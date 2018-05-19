const app = require('express').Router();
module.exports = app;
const { Level } = require('../db').models;

app.get('/', (req, res, next) => {
  Level.findAll()
    .then(levels => res.send(levels))
    .catch(next);
});

app.post('/', (req, res, next) => {
  Level.create(req.body)
  .then(level => res.send(level))
  .catch(next);
});

app.put('/:id', (req, res, next) => {
  Level.findById(req.params.id)
  .then(level => {
    Object.assign(level, req.body)
    return level.save();
  })
  .then(level => res.send(level))
  .catch(next);
});

app.delete('/:id', (req, res, next) => {
  Level.findById(req.params.id)
  .then(level => level.destroy())
  .then(() => res.sendStatus(204))
  .catch(next);
});