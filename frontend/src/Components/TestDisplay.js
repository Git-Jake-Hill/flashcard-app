import { useEffect, useState } from "react";
import axios from "axios";

function TestDisplay({
  cardList,
  curDeck,
  reloadDeck,
  setReloadDeck,
  known,
  filterList,
}) {
  const [showQuestion, setShowQuestion] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const [curCard, setCurCard] = useState({
    question: "No cards to show",
    answer: "No cards to show",
  });

  useEffect(() => {
    console.log("===setShowQuestion:true===");
    // set card to question if deck changes
    setShowQuestion(true);
  }, [curDeck, known]);

  const nextCard = () => {
    setShowQuestion(true);
    if (filterList.length === 0) {
      return;
    } else if (cardIndex + 1 >= filterList.length) {
      // reset index at end of list
      setCardIndex((cardIndex + 1) % filterList.length);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  const setKnown = async () => {
    if (curCard.question !== "No cards to show") {
      setShowQuestion(true);
      const response = await axios
        .put("/api/update-known", curCard)
        .then((res) => {
          setCurCard({
            question: " ",
            answer: " ",
          });
          setReloadDeck(!reloadDeck);
        });
    }
  };

  useEffect(() => {
    if (cardIndex > filterList.length - 1) {
      filterList.length === 0
        ? setCardIndex(0)
        : setCardIndex(filterList.length - 1);
    }

    filterList.length > 0 && filterList.length > cardIndex
      ? setCurCard(filterList[cardIndex])
      : setCurCard({
          question: "No cards to show",
          answer: "No cards to show",
        });
  }, [cardIndex, filterList, curDeck, known]);

  return (
    <>
      <h4 className="cardCount mt-4">{filterList.length} Cards</h4>
      <div className="cardDisplay p-5 my-5 mt-3 border">
        <h4 className={!showQuestion ? "fst-italic fw-normal" : ""}>
          {curCard[showQuestion ? "question" : "answer"]}
        </h4>
      </div>
      <div className="container buttonLayout">
        <div className="row">
          <div className="col d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setShowQuestion(!showQuestion);
              }}
            >
              Flip Card
            </button>
          </div>
          <div className="col d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                nextCard();
              }}
            >
              Next Card
            </button>
          </div>
        </div>
        <div className="d-grid gap-2 my-4">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              setKnown();
            }}
          >
            I Know it
          </button>
        </div>
      </div>
    </>
  );
}

export default TestDisplay;
