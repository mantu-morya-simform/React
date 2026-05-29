import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products"
          className="border rounded-md px-3 py-1 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      {/* Sub Routes (Featured / New) */}
      <div className="flex gap-6 text-lg mb-4">
        <NavLink
          to="featured"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Featured
        </NavLink>

        <NavLink
          to="new"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          New
        </NavLink>
      </div>
      Nested Route Content
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
