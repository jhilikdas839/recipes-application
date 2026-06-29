import React from "react";

const About = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full mb-4">
          🍽️ About RecipeHub
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Cook Delicious Meals with Ease
        </h1>

        <p className="text-slate-600 text-lg leading-8 mb-6">
          RecipeHub is a modern recipe management application built with
          <span className="font-semibold text-orange-500"> React </span>
          and
          <span className="font-semibold text-orange-500"> Tailwind CSS</span>.
          It helps you create, organize, and save your favorite recipes in one
          beautiful place.
        </p>

        <p className="text-slate-600 text-lg leading-8 mb-10">
          Whether you're a beginner or a professional chef, RecipeHub makes it
          simple to discover new dishes, manage your own recipes, and build your
          personal cookbook with an intuitive and responsive interface.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 text-center">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-xl font-semibold text-slate-800">
              Create Recipes
            </h3>
            <p className="mt-2 text-slate-600">
              Add your favorite recipes with complete details.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 text-center">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-xl font-semibold text-slate-800">
              Save Favorites
            </h3>
            <p className="mt-2 text-slate-600">
              Keep all your favorite dishes in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-slate-800">
              Fast & Responsive
            </h3>
            <p className="mt-2 text-slate-600">
              Optimized for mobile, tablet, and desktop devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;