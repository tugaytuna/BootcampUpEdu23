import { Outlet, Link } from "react-router-dom";
import "./LayoutStyle.css";

const Layout = () => {
  return (
    <div className="LayoutMainDiv">
      <h1 className="baslik1">Tugay Tuna</h1>

      <nav>
        <ul>
          <li>
            <Link className="navItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navItem" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
