import { useState } from "react";

function TestDisplay({ cardList }) {
  const [showQuestion, setShowQuestion] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);

  const nextCard = () => {
    setShowQuestion(true);
    if (cardIndex + 1 === cardList.length) {
      // reset index at end of list
      setCardIndex((cardIndex + 1) % cardList.length);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };
  let flipCard = showQuestion ? "question" : "answer";
  let curQuestion = "No cards to show";
  if (cardList.length > 0) {
    curQuestion = cardList[cardIndex][flipCard];
  }
  return (
    <>
      <h4 className="cardCount mt-4">{cardList.length} Cards</h4>
      <div className="cardDisplay p-5 my-5 mt-3 border">
        <h4>{curQuestion}</h4>
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
          <button className="btn btn-success" type="button">
            I Know it
          </button>
        </div>
      </div>
    </>
  );
}

export default TestDisplay;
