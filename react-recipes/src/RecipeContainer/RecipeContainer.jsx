import React, { Component } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';
// import RecipeList from '../RecipeList/RecipeList';
// https://api.edamam.com/search/app_id=${5e4b0c5c}&app_key=${459a130d904b5a0e60b7682878b95ffa}
// app ID - 5e4b0c5c
// app key - 459a130d904b5a0e60b7682878b95ffa

class RecipeContainer extends Component {
    constructor(){
        super()

        this.state = {
            recipes: [],
            recipeToEdit: {
                title: '',
                ingredients: '',
                instructions: '',
                _id: ''
            },
            showEditModal: false
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
    addRecipe = async (recipe, e) => {
        e.preventDefault();
        console.log(recipe);
        try {
            const createdRecipe = await fetch('http://localhost:9000/recipe',
            {method: 'POST',
            body: JSON.stringify(recipe),
            headers: {'Content-Type': 'application/json'}
        })
            const parsedResponse = await createdRecipe.json();
            console.log(parsedResponse);
            this.setState({recipes: [...this.state.recipes, parsedResponse.data]});
    }catch(err){
        console.log(err);
    }
}
// deleteRecipe function - makes a DELETE request to the server to delete a recipe; takes in
// // id, parses response, sets state
    deleteRecipe = async (id) => {
        const deletedRecipe = await fetch('http://localhost:9000/recipe',
        {method: 'DELETE'});
        const deletedRecipeParsed = await deletedRecipe.json();
        this.setState({recipes: this.state.recipes.filter((recipe) => recipe._id !== id)});
        console.log(deletedRecipeParsed, ' this recipe was deleted');
    }
// handleEditChange - takes in e, sets state
    handleEditChange = async (e) => {
        this.setState({
            ...this.state.recipeToEdit,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
// closeAndEdit - makes a PUT request to the server to update the edited recipe; takes in e, 
// // fetches recipe by _id, // headers: {'Content-Type': 'application/json'},
    closeAndEdit = async (e) => {
        e.preventDefault();

        try {
            const editResponse = await fetch('http://localhost:9000/recipe',
            {method: 'PUT',
            body: JSON.stringify({
                title: this.state.recipeToEdit.title,
                ingredients: this.state.recipeToEdit.ingredients,
                instructions: this.state.recipeToEdit.instructions
            }),
            headers: {'Content-Type': 'application/json'},
            });
            const editResponseParsed = await editResponse.json()
            const updatedRecipesArray = this.state.recipes.map((recipe)=>{
                if (recipe._id === editResponseParsed.data._id){
                    recipe = editResponseParsed.data;
                }
                return recipe;
            });
            this.setState({
                showEditModal: false,
                recipes: updatedRecipesArray
            });
            console.log(editResponseParsed, ' parsed response');
   
    }   catch(err){
        console.log(err);
        }
    } 

render(){
    console.log(this.state);
    return(
        <div>
            <h1>Recipe app under construction</h1>
            <RecipeList recipes={this.state.recipes}/>
            <CreateRecipe addRecipe={this.addRecipe}/>
            <EditRecipe open={this.state.showEditModal} recipeToEdit={this.state.recipeToEdit} handleEditChange={this.state.handleEditChange}/>
        </div>
        )
    }
}

export default RecipeContainer;