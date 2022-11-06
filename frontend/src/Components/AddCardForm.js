function AddCardForm() {
  return (
    <div className="addCards">
      <h2 className=" cardCount mt-4">Add Cards</h2>
      <form action="/api/new-card" method="post">
        <div className="row addCard">
          <div className="col-8">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                id="question"
                aria-describedby="new card question"
                placeholder="question..."
              />
            </div>
            <div className="mb-2">
              <input
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
