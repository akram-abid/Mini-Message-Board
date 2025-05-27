const express = require('express');
const app = express();
const path = require("node:path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", { messagesDB: messages })
})

app.get("/new", (req, res) => {
    res.render("index", {message: "fuck this"})
})

app.listen(3000,  () => {
  console.log(`My first Express app - listening on port 3000!`);
});