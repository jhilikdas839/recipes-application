import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "About", path: "/about" },
    { name: "Create", path: "/create" },
    { name: "Favourite", path: "/fav" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide text-orange-500"
        >
          🍽️ RecipeHub
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 font-medium ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-700 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;