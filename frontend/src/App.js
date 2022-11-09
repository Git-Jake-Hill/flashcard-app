import Cards from "./Pages/Cards";
import Test from "./Pages/Test";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cardList, setCardList] = useState([]);
  const [curDeck, setCurDeck] = useState("algo");
  const [filterList, setFilterList] = useState([]);
  const [reloadDeck, setReloadDeck] = useState(false);
  const [known, setKnown] = useState("unknown");

  useEffect(() => {
    if (known === "unknown") {
      setFilterList(cardList.filter((item) => item.known === false));
    } else if (known === "known") {
      setFilterList(cardList.filter((item) => item.known === true));
    } else {
      setFilterList(cardList);
    }
  }, [cardList, known]);

  useEffect(() => {
    const loadCardInfo = async () => {
      const response = await axios.get(`/api/cards/${curDeck}`);
      const cardInfo = response.data;
      setCardList(cardInfo);
    };
    loadCardInfo();
  }, [curDeck, reloadDeck]);

  const propsObj = {
    cardList,
    setCardList,
    curDeck,
    setCurDeck,
    reloadDeck,
    setReloadDeck,
    known,
    setKnown,
    filterList,
  };
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Test {...propsObj} />} />
          <Route path="cards" element={<Cards {...propsObj} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
