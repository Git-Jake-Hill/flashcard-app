import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

function Navbar() {
  const [navActive, setnavActive] = useState("");

  useEffect(() => {
    const curPath = window.location.href;
    setnavActive(curPath.substr(curPath.lastIndexOf("/")));
  }, []);

  return (
    // fixed-bottom
    <nav className="navbar navbar-dark bg-light justify-content-center">
      <div className="nav nav-tabs">
        <div className="nav-item">
          <Link
            className={navActive === "/" ? "nav-link active" : "nav-link"}
            onClick={() => setnavActive("/")}
            to="/"
          >
            {/* <BsPlayCircle /> */}
            Test
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={navActive === "/cards" ? "nav-link active" : "nav-link"}
            onClick={() => setnavActive("/cards")}
            to="/cards"
          >
            Cards
          </Link>
        </div>

        <div className="nav-item">
          <Link
            className={navActive === "/about" ? "nav-link active" : "nav-link"}
            onClick={() => setnavActive("/about")}
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
