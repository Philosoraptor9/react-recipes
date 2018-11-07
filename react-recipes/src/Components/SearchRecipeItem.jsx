import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
    return(
        <li>
            <p>{props.recipe.recipe.label}</p>
            <p>{props.recipe.recipe.healthLabels}</p>
        </li>
    )
}

export default SearchRecipeItem;