require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = process.env.MONGODB_URI;
const port = 8000;

const cardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  tag: String,
  known: { type: Boolean, default: false },
});

// get cards from specified deck
app.get("/api/cards/:deck", async (req, res) => {
  const { deck } = req.params;
  const curDeck = mongoose.model(deck, cardSchema);
  const currentCards = await curDeck.find({});
  if (currentCards) {
    res.send(currentCards);
  } else res.send("Card not found");
});

// add card to db
app.post("/api/new-card", async (req, res) => {
  const postDeck = req.body.tag;
  const newDeck = mongoose.model(postDeck, cardSchema);
  const newCard = new newDeck({
    question: req.body.question,
    answer: req.body.answer,
    known: req.body.known,
    tag: req.body.tag,
  });
  const request = await newCard.save().then(
    () => console.log("One entry added to:", postDeck),
    (err) => console.log(err)
  );
  res.sendStatus(200);
});

// update known/unknown value
app.put("/api/update-known", async (req, res) => {
  const deck = req.body.tag;
  const cardId = req.body._id;
  const curDeck = mongoose.model(deck, cardSchema);
  const currentCard = await curDeck.findOne({ _id: cardId });
  if (currentCard) {
    currentCard.known = !currentCard.known;
    await currentCard.save().then(
      () => console.log(currentCard._id, "set to:", currentCard.known),
      (err) => console.log(err)
    );
    res.sendStatus(200);
  } else res.send("No card found");
});

// delete card from db
app.delete("/api/delete-card", async (req, res) => {
  const deck = req.body.tag;
  const cardId = req.body._id;
  const curDeck = mongoose.model(deck, cardSchema);
  const currentCard = await curDeck.findOne({ _id: cardId });
  console.log("card found:", currentCard);

  if (currentCard) {
    await curDeck.deleteOne({ _id: cardId });
    () => console.log("One entry deleted"), (err) => console.log(err);
    res.sendStatus(200);
  } else {
    res.send("No file to delete");
  }
});

mongoose.connect(dbUrl, (err) => {
  console.log("mongoDB connection", err);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
