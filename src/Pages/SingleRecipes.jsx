import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/MainContext";
import { useForm } from "react-hook-form";

const SingleRecipes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useContext(RecipesContext);

  const recipe = recipes.find((item) => item.id === id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: recipe?.Name,
      Ingridients: recipe?.Ingridients,
      Description: recipe?.Description,
      Category: recipe?.Category,
    },
  });

  const UpdateHandeler = (newData) => {
    const index = recipes.findIndex((item) => item.id === id);

    const updatedRecipes = [...recipes];

    updatedRecipes[index] = {
      ...updatedRecipes[index],
      ...newData,
    };

    setRecipes(updatedRecipes);

    localStorage.setItem("recipe", JSON.stringify(updatedRecipes));

    navigate("/recipes");
  };

  const DeleteHandeler = () => {
    const filteredRecipes = recipes.filter((item) => item.id !== id);

    setRecipes(filteredRecipes);

    localStorage.setItem("recipe", JSON.stringify(filteredRecipes));

    navigate("/recipes");
  };

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const FavHandeler = () => {
    if (favourite.find((f) => f.id === recipe.id)) return;

    const updatedFav = [...favourite, recipe];

    setFavourite(updatedFav);

    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };

  const UnFavHandeler = () => {
    const updatedFav = favourite.filter((f) => f.id !== recipe.id);

    setFavourite(updatedFav);

    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };

  if (!recipe) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">Recipe Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
            <span className="text-8xl">🍽️</span>

            {favourite.find((f) => f.id === recipe.id) ? (
              <button
                onClick={UnFavHandeler}
                className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-lg transition hover:scale-110"
              >
                ❤️
              </button>
            ) : (
              <button
                onClick={FavHandeler}
                className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-lg transition hover:scale-110"
              >
                🤍
              </button>
            )}
          </div>

          <div className="space-y-6 p-8">
            <span className="rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-600">
              {recipe.Category}
            </span>

            <h1 className="text-4xl font-bold text-slate-800">{recipe.Name}</h1>

            <div>
              <h2 className="mb-2 text-xl font-bold text-slate-700">
                Ingredients
              </h2>

              <p className="leading-7 text-slate-600">{recipe.Ingridients}</p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-slate-700">
                Description
              </h2>

              <p className="leading-7 text-slate-600">{recipe.Description}</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE STARTS HERE */}

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            Edit Recipe
          </h2>

          <form onSubmit={handleSubmit(UpdateHandeler)} className="space-y-5">
            {/* Recipe Name */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Recipe Name
              </label>

              <input
                {...register("Name")}
                type="text"
                placeholder="Enter recipe name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Ingredients */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Ingredients
              </label>

              <textarea
                {...register("Ingridients")}
                rows="5"
                placeholder="Enter ingredients..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Description
              </label>

              <textarea
                {...register("Description")}
                rows="5"
                placeholder="Enter recipe description..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Category
              </label>

              <select
                {...register("Category")}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              >
                <option value="Indian">🇮🇳 Indian</option>
                <option value="Italian">🍝 Italian</option>
                <option value="Thai">🍜 Thai</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-orange-500 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
              >
                Update Recipe
              </button>

              <button
                type="button"
                onClick={DeleteHandeler}
                className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white transition duration-300 hover:bg-red-600"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipes;
