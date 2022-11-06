function FilterCardDisplay() {
  return (
    <div className="row filterCards">
      <div className="col">
        <label for="formSelectDeck" className="form-label text-start">
          Deck
        </label>
        <select
          className="form-select"
          aria-label="Form select deck"
          id="formSelectDeck"
        >
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col">
        <label for="formSelectDeck" className="form-label text-start">
          Tag
        </label>
        <select
          className="form-select"
          aria-label="Form select deck"
          id="formSelectDeck"
        >
          <option selected>All</option>
          <option value="Known">Known</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCardDisplay;
