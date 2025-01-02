const { postMessage, getAllMessages, getMessage } = require("../db/queries");

class messageController {
  constructor() {
    this.id = 2;
  }

  newMessagePost = async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    await postMessage(name, message, this.id);
    this.id += 1;
    res.redirect("/");
  };

  async allMessagesGet(req, res) {
    const messages = await getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  }

  async getMessage(req, res) {
    const id = req.params.id;
    const message = await getMessage(id);
    // add get message from db here
    res.render("messagePage", {
      title: "Mini Messageboard",
      value: message[0],
    });
  }

  async newMessageGet(req, res) {
    // don't need to get all messages, since its just a submit form
    res.render("form", { title: "Mini Messageboard" });
  }
}

module.exports = new messageController();
