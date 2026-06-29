import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-slate-50">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              🍽️ Welcome to RecipeHub
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Discover,
              <span className="text-orange-500"> Cook </span>
              &
              <span className="text-red-500"> Share</span>
              <br />
              Delicious Recipes
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Find tasty recipes from different cuisines, save your favourites,
              and create your own recipe collection with an elegant and modern
              experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/recipes"
                className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600 hover:scale-105"
              >
                Browse Recipes
              </Link>

              <Link
                to="/create"
                className="rounded-xl border-2 border-orange-500 px-7 py-4 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                Create Recipe
              </Link>

            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-orange-200 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-red-200 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
              alt="Food"
              className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">🍕</div>

            <h2 className="mt-5 text-2xl font-bold">
              Explore Recipes
            </h2>

            <p className="mt-3 text-slate-600">
              Browse delicious recipes from multiple cuisines and categories.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">❤️</div>

            <h2 className="mt-5 text-2xl font-bold">
              Save Favourites
            </h2>

            <p className="mt-3 text-slate-600">
              Keep your most-loved recipes safely stored for later.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">👨‍🍳</div>

            <h2 className="mt-5 text-2xl font-bold">
              Create Your Own
            </h2>

            <p className="mt-3 text-slate-600">
              Share your personal recipes with a beautiful and simple interface.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;