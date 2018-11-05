import React, { Component } from 'react';
// import CreateRecipe from '../CreateRecipe/CreateRecipe';
// import EditRecipe from '../EditRecipe/EditRecipe';
// import RecipeList from '../RecipeList/RecipeList';

class RecipeContainer extends Component {
    constructor(){
        super()

        this.state = {
            recipes: [],
        }
    }
render(){
    console.log(this.state);
    return(
        <div>
            <h1>Recipe app under construction</h1>
        </div>
        )
    }
}

export default RecipeContainer;