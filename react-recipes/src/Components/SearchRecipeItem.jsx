import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
    return(
        <li>
            <p><a href={props.recipe.recipe.url}>{props.recipe.recipe.label}</a></p>
            <p>{props.recipe.recipe.healthLabels}</p>
        </li>
    )
}

export default SearchRecipeItem;