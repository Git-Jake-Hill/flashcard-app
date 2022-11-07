import "./Card.css";

function Card({ question }) {
  return (
    <div className="row cardItem">
      <hr />
      <div className="col text-truncate card-text">{question}</div>
      <div className="col-2 ml-6 p-0 d-flex justify-content-end dropdown">
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
            <a className="dropdown-item" href="#">
              Edit card
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Toggle known
            </a>
          </li>
          <hr />
          <li>
            <a className="dropdown-item" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
