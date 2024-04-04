import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <nav className="container py-4">
        <h1 className="display-3">Virat Kohli</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/biography" className="nav-link">
              Biography
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/record" className="nav-link">
              Records
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
