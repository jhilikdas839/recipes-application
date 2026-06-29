import React from "react";
import { Link } from "react-router-dom";

const Not = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-orange-500">
          404
        </h1>

        {/* Emoji */}
        <div className="text-7xl my-6">
          🍽️
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Oops! Recipe Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-slate-500 leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to discovering delicious recipes.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600 hover:scale-105"
          >
            🏠 Go Home
          </Link>

          <Link
            to="/recipes"
            className="rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
          >
            🍲 Browse Recipes
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Not;