import "./Card.css";
import axios from "axios";

function Card({ question, reloadDeck, setReloadDeck, curCard }) {
  const deleteCard = async (event) => {
    event.preventDefault();
    console.log(curCard);
    await axios.delete(`/api/delete-card`, { data: curCard });
    setReloadDeck(!reloadDeck);
  };
  return (
    <div className="row cardItem">
      <hr />
      <div className="col text-truncate card-text">{question}</div>
      <div className="col-2 d-flex justify-content-end dropdown">
        <button
          className="btn btn-outline-secondary btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Edit
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <button className="dropdown-item">Edit card</button>
          </li>
          <li>
            <button className="dropdown-item">Toggle known</button>
          </li>
          <hr />
          <li>
            <button className="dropdown-item" onClick={deleteCard}>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
