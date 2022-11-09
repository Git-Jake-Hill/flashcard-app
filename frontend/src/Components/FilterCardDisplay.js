function FilterCardDisplay({ curDeck, setCurDeck, known, setKnown }) {
  return (
    <div className="row filterCards">
      <div className="col">
        <label htmlFor="formSelectDeck" className="form-label text-start">
          Deck
        </label>
        <select
          className="form-select"
          aria-label="Form select deck"
          id="formSelectDeck"
          onChange={(event) => setCurDeck(event.target.value)}
          value={curDeck}
        >
          <option value="algo">algo</option>
          <option value="cards">cards</option>
          <option value="all">all</option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="formSelectDeck" className="form-label text-start">
          Tag
        </label>
        <select
          className="form-select"
          aria-label="Form select deck"
          id="formSelectDeck"
          onChange={(event) => setKnown(event.target.value)}
          value={known}
        >
          <option value="all">All</option>
          <option value="known">Known</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCardDisplay;
