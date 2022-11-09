import { useState } from "react";
import axios from "axios";

function AddCardForm({ curDeck, reloadDeck, setReloadDeck }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCard = {
      question: question,
      answer: answer,
      tag: curDeck,
    };

    await axios.post(`/api/new-card`, newCard);
    setReloadDeck(!reloadDeck);
  };

  return (
    <div className="addCards">
      <h2 className=" cardCount mt-4">Add Cards</h2>
      <form onSubmit={handleSubmit}>
        <div className="row addCard">
          <div className="col-8">
            <div className="mb-2">
              <input
                onChange={(event) => {
                  setQuestion(event.target.value);
                }}
                type="text"
                className="form-control"
                id="question"
                aria-describedby="new card question"
                placeholder="question..."
                required="required"
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(event) => {
                  setAnswer(event.target.value);
                }}
                type="text"
                className="form-control"
                id="answer"
                placeholder="answer..."
                required="required"
              />
            </div>
          </div>
          <div className="col-4 align-self-end mb-2">
            <button type="submit" className="btn btn-primary btn-sm">
              Add Card
            </button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default AddCardForm;
