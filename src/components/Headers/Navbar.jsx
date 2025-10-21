import { Link, NavLink } from "react-router";
import UserImg from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-center flex flex-1">
        <ul className="menu items-center justify-center w-full menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="hover: text-lg text-dark-500 bg-transparent"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover: text-lg text-dark-500 bg-transparent"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover: text-lg text-dark-500 bg-transparent"
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2 w-fit">
        <figure className="w-[40px] h-[40px]">
          <img
            src={UserImg}
            alt="User Img"
            className="w-full h-full object-cover"
          />
        </figure>
        <Link
          to="/auth/login"
          className="btn btn-primary text-white w-[140px] h-[44px] text-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
