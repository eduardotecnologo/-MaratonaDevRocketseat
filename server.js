//Setup Server
const express = require('express');
const server = express();
server.use(express.static('public'));

//Setupe template engine nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('./', {
  express: server
});

//Render Pages
server.get('/', function(req, res) {
  return res.render('index.html');
});

server.listen(3000, function() {
  console.log('Start server');
});
