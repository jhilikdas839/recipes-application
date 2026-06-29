import React, { useContext } from "react";
import { RecipesContext } from "../context/MainContext";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes] = useContext(RecipesContext);

  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
               All Recipes
            </h1>

            <p className="mt-2 text-slate-500">
              Discover and manage your delicious recipes.
            </p>
          </div>

          <div className="rounded-full bg-orange-500 px-5 py-3 text-white font-semibold shadow-lg">
            {recipes.length} Recipes
          </div>
        </div>

        {/* Empty State */}
        {recipes.length === 0 ? (
          <div className="rounded-3xl bg-white shadow-lg p-16 text-center">

            <div className="text-7xl">🍲</div>

            <h2 className="mt-5 text-3xl font-bold text-slate-800">
              No Recipes Found
            </h2>

            <p className="mt-3 text-slate-500">
              Start by creating your first delicious recipe.
            </p>

            <Link
              to="/create"
              className="inline-block mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              ➕ Create Recipe
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipes/details/${recipe.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Placeholder */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
                  <span className="text-7xl">🍽️</span>
                </div>

                {/* Card Body */}
                <div className="space-y-4 p-6">

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                      {recipe.Category}
                    </span>

                    <span className="text-xl">❤️</span>
                  </div>

                  <h2 className="truncate text-2xl font-bold text-slate-800">
                    {recipe.Name}
                  </h2>

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

                  <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                    View Recipe →
                  </button>

                </div>
              </Link>
            ))}

          </div>
        )}
      </div>
    </section>
  );
};

export default Recipes;