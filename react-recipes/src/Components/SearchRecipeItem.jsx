import React from 'react';

const SearchRecipeItem = (props) => {
console.log(props);
// this.SearchRecipeItem = this.SearchRecipeItem.bind(this);
    return(
        <li>
            <p>{props.recipe.recipe.label}</p>
        </li>
    )
}

export default SearchRecipeItem;