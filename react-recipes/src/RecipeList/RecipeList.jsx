import React from 'react';

// Pure function that takes in props and maps over the recipes array and returns a list of 
// // recipes, includes edit and delete buttons

const RecipeList = (props) =>{
    console.log(props);
    const recipes = props.recipes.map((recipe, i) =>{
        return (
            <li key={recipe._id}>
                <h5>{recipe.title}</h5>
                    <p>{recipe.ingredients}</p>
                        <small>{recipe.instructions}</small>
            </li>
        )
    })
    return(
        <div>
            <h3>Recipes</h3>
                <ul>{recipes}</ul>
        </div>
    )
}

export default RecipeList;