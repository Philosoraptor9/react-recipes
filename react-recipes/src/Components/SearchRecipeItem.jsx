import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
    return(
        <li>
            <p>{props.recipe.recipe.label}</p>
        </li>
    )
}

export default SearchRecipeItem;