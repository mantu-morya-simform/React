import { NavLink } from "react-router-dom";
import useAuth from "../context/useAuth";

function Navbar() {
  const auth = useAuth();
  const linkStyle = "px-4 py-2 rounded-md text-sm font-medium transition";
  const active = "bg-blue-500 text-white";
  const inactive = "text-gray-700 hover:bg-gray-200";
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-600">MyApp</h1>
        {/* What is isActive? React Router automatically gives this: isActive 
        = true → when current URL is / isActive = false → when you are on
        another page */}
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/order"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            Order
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? active : inactive}`
            }
          >
            Products
          </NavLink>

          {auth.user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? active : inactive}`
              }
            >
              Profile
            </NavLink>
          )}

          {!auth.user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? active : inactive}`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
