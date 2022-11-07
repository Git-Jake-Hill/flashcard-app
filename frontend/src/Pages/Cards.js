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
}) {
  const [known, setKnown] = useState("unknown");

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
        <h2 className=" cardCount mt-4">{cardList.length} Cards</h2>
        {cardList.map((item, index) => {
          return <Card key={index} question={item.question} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
