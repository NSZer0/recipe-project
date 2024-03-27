import React from "react";
import RecipeRows from "./RecipeRows";

function RecipeList({ recipes, deleteRecipe }) {
  // DONE: Display the list of recipes using the structure of table that is provided.
  // DONE: Create at least one additional component that is used by this component.
  // DONE: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  // Render the RecipeList component
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeRows recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
