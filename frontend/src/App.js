import Cards from "./Pages/Cards";
import Test from "./Pages/Test";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="cards" element={<Cards />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
