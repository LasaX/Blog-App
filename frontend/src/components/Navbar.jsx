import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import avatarImg from "../assets/commentor.png";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useLogOutUserMutation } from "../redux/features/Auth/authApi";
import { logout } from "../redux/features/Auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await logOutUser().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-5">
        <a href="/">
          <img src="/" alt="Logo" className="h-12" />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={`${list.path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-gray-500"
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}

          {user && user.role === "user" ? (
            <li className="flex items-center gap-3">
              <img src={user.avatar || avatarImg} alt="Avatar" className="h-8 w-8 rounded-full" />
              <button
                onClick={handleLogout}
                className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm"
              >
                Log out
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}

          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img src={user.avatar || avatarImg} alt="Avatar" className="h-8 w-8 rounded-full" />
              <Link to="/dashboard">
                <button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? <IoClose className="text-2xl" /> : <IoMenuSharp className="text-2xl" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navLists.map((list, index) => (
            <li className="mt-5 px-4" key={index}>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to={`${list.path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-gray-500"
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li className="px-4 mt-5">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
