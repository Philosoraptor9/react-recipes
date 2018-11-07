import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
    return(
        <li>
            <p>{props.recipe.recipe.label}</p>
            <p>{props.recipe.recipe.healthLabels}</p>
            <p><a href={props.recipe.recipe.url}></a></p>
        </li>
    )
}

export default SearchRecipeItem;