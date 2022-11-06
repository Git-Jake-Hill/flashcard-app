import FilterCardDisplay from "../Components/FilterCardDisplay";

function Cards() {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Cards</h1>
      <br />
      <FilterCardDisplay />
      <div className="addCards">
        <h2 className=" cardCount mt-4">Add Cards</h2>
        <form action="POST">
          <div className="row addCard">
            <div className="col-8">
              <div className="mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="formQuestion"
                  aria-describedby="new card question"
                  placeholder="question..."
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="formAnswer"
                  placeholder="answer..."
                />
              </div>
            </div>
            <div className="col-4 align-self-end mb-2">
              <button type="submit" class="btn btn-primary btn-sm">
                Add Card
              </button>
            </div>
          </div>
        </form>
        <hr />
      </div>
      <div className="cardList">
        <h2 className=" cardCount mt-4">44 Cards</h2>

        <div className="row cardItem">
          <div className="col text-truncate" style={{ "max-width": "75vw" }}>
            What is the runtime of O(log n) and a bit longer q here?
          </div>
          <div className="col-2 ml-6 p-0 d-flex justify-content-end dropdown">
            <button
              class="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Edit
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Edit card
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Toggle known
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
