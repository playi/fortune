var express = require('express');
var getFortune = require('./getFortune')
var app = express();

app.use(getFortune)

app.get('/', function(req, res){
  res.send(res.get('fortune'));
});

app.get('/json', function(req, res){
  res.send({ "fortune": res.get('fortune') });
});

app.use(function(err, req, res, next){
  res.status(400).send(err);
});

console.log('fortune server is listening on port 5388')
app.listen(5388);