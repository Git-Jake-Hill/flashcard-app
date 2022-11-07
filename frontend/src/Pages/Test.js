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
}) {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Run Test</h1>
      <br />
      <FilterCardDisplay curDeck={curDeck} setCurDeck={setCurDeck} />
      <TestDisplay cardList={cardList} />
    </div>
  );
}

export default Test;
