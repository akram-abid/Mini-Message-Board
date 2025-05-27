const express = require('express');
const app = express();
const path = require("node:path");

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messagesDB: messages })
});

app.get("/new", (req, res) => {
    res.render("form", {})
});

app.post("/new", (req, res) => {
  messages.push({
    id: messages.length,
    user: req.body.user,
    text: req.body.text,
    added: new Date()
  });
  res.redirect("/");
});

app.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

app.listen(3000,  () => {
  console.log(`My first Express app - listening on port 3000!`);
});