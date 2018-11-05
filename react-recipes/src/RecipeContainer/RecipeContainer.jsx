import React, { Component } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
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
// getRecipes function - makes a GET request to the server to get the recipes
    getRecipes = async () => {
        const recipes = await fetch('http://localhost:9000/recipe');
        const recipesParsedJSON = await recipes.json();
        console.log(recipesParsedJSON);
        return recipesParsedJSON;
    }
// componentDidMount - calls the getRecipes function
    componentDidMount = () => {
        this.getRecipes().then((recipes) =>{
            this.setState({recipes: recipes.data});
        }).catch((err) => {
            console.log(err)
        })
    }
// // addRecipe function - makes a POST request to the server to add the created recipe; takes in 
// // recipe & e, prevents default, // headers: {'Content-Type': 'application/json'}, parses response,
// // sets state
// deleteRecipe function - makes a DELETE request to the server to delete a recipe; takes in
// // id, parses response, sets state
// handleEditChange - takes in e, sets state
// closeAndEdit - makes a PUT request to the server to update the edited recipe; takes in e, 
// // fetches recipe by _id, // headers: {'Content-Type': 'application/json'},
 
render(){
    console.log(this.state);
    return(
        <div>
            <h1>Recipe app under construction</h1>
            <RecipeList />
            <CreateRecipe />
        </div>
        )
    }
}

export default RecipeContainer;