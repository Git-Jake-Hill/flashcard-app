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

let Cards = mongoose.model("Cards", cardSchema);

var cards = [
  {
    question: "Some question here",
    answer: "A verry good answer",
    known: false,
    tag: "['algo','cs']",
  },
];

app.get("/hello", (res, req) => {
  req.send(cards);
});

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

  var newCard = new Cards(
    `{question: ${res.body.question}, answer: ${res.body.answer} known: ${res.body.known} tag: ${res.body.tag}}`
  );

  newCard.save().then(
    () => console.log("One entry added"),
    (err) => console.log(err)
  );
});

mongoose.connect(dbUrl, (err) => {
  console.log("mongoDB connection", err);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
