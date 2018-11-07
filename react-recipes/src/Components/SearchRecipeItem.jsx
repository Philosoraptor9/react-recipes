import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
    return(
        <li>
            <img src={props.recipe.recipe.image} />
            <br />
            <p><a href={props.recipe.recipe.url}>{props.recipe.recipe.label}</a></p>
            <br />
            <p>{props.recipe.recipe.healthLabels}</p>
            <br />
        </li>
    )
}

export default SearchRecipeItem;