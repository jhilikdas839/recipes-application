import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipesContext } from "../context/MainContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(RecipesContext);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const SubmitHandeler = (data) => {
    data.id = nanoid();

    const copyrecipes = [...recipes];
    copyrecipes.push(data);

    setRecipes(copyrecipes);
    localStorage.setItem("recipe", JSON.stringify(copyrecipes));

    reset();
    navigate("/recipes");
  };

  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Create New Recipe
          </h1>
          <p className="text-orange-100 mt-2">
            Share your delicious recipe with everyone 🍽️
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(SubmitHandeler)}
          className="p-8 space-y-6"
        >

          {/* Recipe Name */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Recipe Name
            </label>

            <input
              {...register("Name")}
              type="text"
              placeholder="Chicken Biryani"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Ingredients
            </label>

            <textarea
              {...register("Ingridients")}
              rows="5"
              placeholder="Rice, Chicken, Onion..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Description
            </label>

            <textarea
              {...register("Description")}
              rows="5"
              placeholder="Write the cooking steps..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Category
            </label>

            <select
              {...register("Category")}
              defaultValue=""
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            >
              <option value="" disabled>
                Select Category
              </option>

              <option value="Indian">🇮🇳 Indian</option>
              <option value="Italian">🍝 Italian</option>
              <option value="Thai">🍜 Thai</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            🍳 Create Recipe
          </button>

        </form>
      </div>
    </section>
  );
};

export default Create;