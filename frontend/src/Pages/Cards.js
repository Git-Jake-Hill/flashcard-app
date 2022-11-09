import AddCardForm from "../Components/AddCardForm";
import FilterCardDisplay from "../Components/FilterCardDisplay";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

function Cards({
  cardList,
  setCardList,
  curDeck,
  setCurDeck,
  reloadDeck,
  setReloadDeck,
  known,
  setKnown,
  knownGroup,
  filterList,
}) {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Cards</h1>
      <br />
      <FilterCardDisplay
        curDeck={curDeck}
        setCurDeck={setCurDeck}
        known={known}
        setKnown={setKnown}
      />
      <AddCardForm
        curDeck={curDeck}
        reloadDeck={reloadDeck}
        setReloadDeck={setReloadDeck}
      />
      <div className="cardList">
        <h2 className=" cardCount mt-4">{filterList.length} Cards</h2>
        {filterList.map((item) => {
          return (
            <Card
              key={item._id}
              question={item.question}
              reloadDeck={reloadDeck}
              setReloadDeck={setReloadDeck}
              curCard={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
