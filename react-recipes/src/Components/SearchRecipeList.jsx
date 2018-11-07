import React from 'react';
import SearchRecipeItem from './SearchRecipeItem'

const SearchRecipeList = (props) => {
    console.log(props);
    const recipeItems = props.recipes.map((label) =>{
        return <SearchRecipeItem key={label.id} recipe={label} />
    });
    return (
        <ul>{recipeItems}</ul>
    )
}

export default SearchRecipeList;