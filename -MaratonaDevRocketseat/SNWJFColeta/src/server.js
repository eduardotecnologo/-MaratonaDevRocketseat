const express = require("express");
const server = express();

// Importando o DB
const db = require("./database/db");

// Setup folder public
server.use(express.static("public"));

// Use template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

// Page main
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" });
});

// Page create-point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

// Page search
server.get("/search", (req, res) => {
  // Consultando os dados na tabela
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    // Trazendo o total de pontos encontrados
    const total = rows.length;

    // Mostrando os dados no html
    return res.render("search-results.html", { places: rows, total: total });
  });
});
// Start Server
server.listen(3000);