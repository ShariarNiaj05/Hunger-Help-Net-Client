import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const activeLinkStyle = ({ isActive, isPending }) =>
    isPending
      ? "pending"
      : isActive
      ? "bg-gray-700 text-white rounded p-2"
      : " hover:bg-gray-900 hover:text-white rounded p-2";

  const navItem = (
    <div className=" flex flex-col lg:flex-row gap-3 text-xl font-medium text-blue-700">
      <NavLink to={"/"} className={activeLinkStyle}>
        Home
      </NavLink>
      <NavLink to={"/available-foods"} className={activeLinkStyle}>
        Available Foods
      </NavLink>
      <NavLink to={"/add-food"} className={activeLinkStyle}>
        Add Food
      </NavLink>
      <NavLink to={"/manage-my-foods"} className={activeLinkStyle}>
        Manage My Foods
      </NavLink>
      <NavLink to={"/my-food-request"} className={activeLinkStyle}>
        My Food Request
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100 px-10 py-5 shadow-sm shadow-orange-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} className="w-1/3 h-1/2" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
