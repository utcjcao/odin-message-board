import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
const app = new express();

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

let id = 2;

let messages = {
  0: {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  1: {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
};

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

app.post("/new", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages[id] = { text: message, user: name, added: new Date() };
  id += 1;
  res.redirect("/");
});

app.post("/message/:id", (req, res) => {
  const id = req.params.id;
  res.render("messagePage", {
    title: "Mini Messageboard",
    value: messages[id],
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
