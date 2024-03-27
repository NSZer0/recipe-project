import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // DONE: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // DONE: Add the required input and textarea form elements.
  // DONE: Add the required submit and change handlers.

  // Initial state of formData should be empty
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  // Declare the useState hook for the 'formData' object
  const [formData, setFormData] = useState({ ...initialFormState });

  // Called whenever an input is changed to keep formData updated with the form input fields
  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (event) => {
    // Prevent reloading the page
    event.preventDefault();
    // Call the createRecipe function, which is declared in App, passing formData as a parameter
    createRecipe(formData);
    // Revert formData to initialFormState
    setFormData({ ...initialFormState });
    // Clear the form inputs as well
    // event.target returns the form
    // Calling reset() on the form will revert all the inputs back to the default, removing all user changes
    event.target.reset();
  };

  // Render the RecipeCreate component
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                required={true}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows={2}
                required={true}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
