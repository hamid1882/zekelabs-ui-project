import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container dark-bg">
      <Link
        to="/"
        className={`btn text-light w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
          location.pathname === "/" ? "light-bg text-dark" : null
        }`}
      >
        <i className="fa fa-home fs-4"></i>
        <span className="text-small">Home</span>
      </Link>

      <Link
        to="/modules"
        className={`btn text-light w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
          location.pathname === "/modules" ? "light-bg text-dark" : null
        }`}
      >
        <i className="fa fa-database fs-4"></i>
        <span className="text-small">Modules</span>
      </Link>

      <Link
        to="instructions"
        className={`btn text-light w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
          location.pathname === "/instructions" ? "light-bg text-dark" : null
        }`}
      >
        <i className="fa fa-book fs-4"></i>
        <span className="text-small">Instructions</span>
      </Link>
    </div>
  );
};

export default Sidebar;
