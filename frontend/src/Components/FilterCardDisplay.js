function FilterCardDisplay({ curDeck, setCurDeck, known, setKnown }) {
  return (
    <div className="row filterCards">
      <div className="col">
                <label
                    htmlFor="formSelectDeck"
                    className="form-label text-start"
                >
          Topic:
        </label>
        <select
          className="form-select"
          aria-label="Form select deck"
          id="formSelectDeck"
          onChange={(event) => setCurDeck(event.target.value)}
          value={curDeck}
        >
                    {"// TODO change options to be dynamic"}
          <option value="big o notation">bigO Notation</option>
          <option value="git">Git</option>
          <option value="linux">Linux</option>
        </select>
      </div>
      <div className="col">
                <label
                    htmlFor="formSelectDeck"
                    className="form-label text-start"
                >
          Filter by:
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
