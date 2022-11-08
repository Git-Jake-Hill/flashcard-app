require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = process.env.MONGODB_URI;

const cardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  tag: String,
  known: { type: Boolean, default: false },
});

// Model name is Cards
let Cards = mongoose.model("Cards", cardSchema);

var cards = [
  {
    question: "Some question here",
    answer: "A verry good answer",
    known: false,
    tag: "['algo','cs']",
  },
];
// sample post object
// {
//     "question": "Some question here",
//     "answer": "A verry good answer",
//     "known": false,
//     "tag": "['algo','cs']"
// }

// get cards from specified deck
app.get("/api/cards/:deck", async (req, res) => {
  const { deck } = req.params;

  if (deck === "all") {
    const allCards = [];
    res.send(allCards);
  } else {
    const curDeck = mongoose.model(deck, cardSchema);
    const currentCards = await curDeck.find({});
    if (currentCards) {
      res.send(currentCards);
    } else res.send([]);
  }
});

// cards only
app.get("/api/cards", async (req, res) => {
  //   req.send(cards);
  let currentCards = await Cards.find({});
  req.send(currentCards);
});

app.post("/api/new-card", async (req, res) => {
  const postDeck = req.body.tag;
  //   console.log(req.body);
  let newDeck = mongoose.model(postDeck, cardSchema);
  var newCard = new newDeck({
    question: req.body.question,
    answer: req.body.answer,
    known: req.body.known,
    tag: req.body.tag,
  });

  console.log(newCard);
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
      (err) => console.log(err).then(currentCard.sendstatus(200))
    );
    res.sendStatus(200);
  } else res.send("No card found");
});
});

mongoose.connect(dbUrl, (err) => {
  console.log("mongoDB connection", err);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
