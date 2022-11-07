function FilterCardDisplay({ curDeck, setCurDeck }) {
  const handleChange = (event) => {
    event.preventDefault();
    setCurDeck(event.target.value);
  };

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
          onChange={handleChange}
          value={curDeck}
        >
          <option value="algo">algo</option>
          <option value="cards">cards</option>
          <option value="all">all</option>
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
          <option defaultValue>All</option>
          <option value="Known">Known</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCardDisplay;
