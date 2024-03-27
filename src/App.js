import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // DONE: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // DONE: Add the ability for the <RecipeCreate /> component to create new recipes.

  // Declare the useState hook for 'recipes' array
  const [recipes, setRecipes] = useState(RecipeData);

  // Adds a newly created recipe to the end of the recipe list
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe,
    ]);
  }

  // Removes a recipe from the list at the provided index
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
    currentRecipes.filter((recipe, index) => index !== indexToDelete)); // Filters out only the recipe at the provided index
  }

  // Render the App component
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
