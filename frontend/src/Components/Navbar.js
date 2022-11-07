import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">Test</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
