const express = require("express");
const server = express();

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
  return res.render("search-results.html");
});
// Start Server
server.listen(3000);