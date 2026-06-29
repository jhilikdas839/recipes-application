import React, { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

const MainContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipe")) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipesContext.Provider>
  );
};

export default MainContext;