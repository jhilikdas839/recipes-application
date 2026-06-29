import React from "react";
import { Link } from "react-router-dom";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            ❤️ Favourite Recipes
          </h1>
          <p className="mt-2 text-slate-500">
            Your saved recipes in one place.
          </p>
        </div>

        {/* Empty State */}
        {favourite.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-16 shadow-lg">
            <div className="text-7xl">🍽️</div>

            <h2 className="mt-5 text-2xl font-bold text-slate-800">
              No Favourite Recipes
            </h2>

            <p className="mt-2 text-slate-500">
              Save recipes to see them here.
            </p>

            <Link
              to="/recipes"
              className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Recipes
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favourite.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipes/details/${recipe.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5">
                  <h2 className="truncate text-xl font-bold text-white">
                    {recipe.Name}
                  </h2>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="font-semibold text-slate-700">
                      Ingredients
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                      {recipe.Ingridients}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-700">
                      Description
                    </h3>

                    <p className="mt-1 line-clamp-3 text-sm text-slate-500">
                      {recipe.Description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                      {recipe.Category}
                    </span>

                    <span className="text-orange-500 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Fav;