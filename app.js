const express = require("express");
const app = express();
const { EventEmitter } = require("events");
const Emitter = new EventEmitter();

const waiting_clients = [];

app.post("/client/:id", (req, res) => {
  waiting_clients.push(req.params.id);
  Emitter.on("proccessed", (id) => {
    if (id === req.params.id) return res.send(id);
  });
});

app.post("/webhook/:id", (req, res) => {
  if (waiting_clients.includes(req.params.id)) {
    Emitter.emit("proccessed", req.params.id);
    return res.send({ result: "ok" });
  } else {
    return res.send(`No client with id: ${req.params.id} could be found.`);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
