import { useState } from "react";
import axios from "axios";

function AddCardForm(props) {
  const curDeck = props.curDeck;
  const setPost = props.setPost;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      question: question,
      answer: answer,
      tag: curDeck,
    };

    axios.post(`/api/new-card`, newCard);

    setPost(!props.post);
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
