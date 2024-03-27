import React from "react";

export default function RecipeRows({ recipes, deleteRecipe }) {
  // Parse the array of recipes into table rows and render the RecipeRows component
  return recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} /></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  ));
}
