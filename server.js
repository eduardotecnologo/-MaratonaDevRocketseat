//Setup Server
const express = require('express');
const server = express();
server.use(express.static('public'));

//Habilitar corpo do formulário
server.use(
  express.urlencoded({
    extended: true
  })
);

//Setupe template engine nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('./', {
  express: server,
  noCache: true
});

//Lista de Doadores
const donors = [
  {
    name: 'Eduardo Alexandre',
    blood: 'AB+'
  },
  {
    name: 'Alexandre Eduardo ',
    blood: 'AB+'
  },
  {
    name: 'Eduardo Alexandre',
    blood: 'AB+'
  },
  {
    name: 'Alexandre Eduardo',
    blood: 'AB+'
  }
];

//Render Pages
server.get('/', function(req, res) {
  return res.render('index.html', { donors });
});
//Pegando dados do formulário
server.post('/', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const state = req.body.state;
  const city = req.body.city;
  const blood = req.body.blood;

  //Enviando valores para o array
  donors.push({
    name: name,
    email: email,
    phone: phone,
    state: state,
    city: city,
    blood: blood
  });

  return res.redirect('/');
});

server.listen(3000, function() {
  console.log('Start server');
});
