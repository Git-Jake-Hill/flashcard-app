import FilterCardDisplay from "../Components/FilterCardDisplay";
import TestDisplay from "../Components/TestDisplay";
import { useState } from "react";

function Test({
  cardList,
  setCardList,
  curDeck,
  setCurDeck,
  reloadDeck,
  setReloadDeck,
  known,
  setKnown,
  filterList,
}) {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Run Test</h1>
      <br />
      <FilterCardDisplay
        curDeck={curDeck}
        setCurDeck={setCurDeck}
        known={known}
        setKnown={setKnown}
      />
      <TestDisplay
        cardList={cardList}
        curDeck={curDeck}
        reloadDeck={reloadDeck}
        setReloadDeck={setReloadDeck}
        known={known}
        filterList={filterList}
      />
    </div>
  );
}

export default Test;
