import React, { Component } from 'react';

import CreateRecipe from '../Components/CreateRecipe';
import EditRecipe from '../Components/EditRecipe';
import UserRecipeList from '../Components/UserRecipeList';
import ResultsContainer from './ResultsContainer';
import { Grid } from 'semantic-ui-react';
// https://api.edamam.com/search?q=${term.replace(/\s/g, '+')}app_id=${5e4b0c5c}&app_key=${459a130d904b5a0e60b7682878b95ffa}


class RecipeContainer extends Component {
    constructor(){
        super();

        this.state = {
            recipes: [],
            // recipeToEdit: {
                title: '',
                ingredients: '',
                instructions: '',
                _id: '',
            // },
            showEditModal: false
        }
    }
// getRecipes function - makes a GET request to the server to get the recipes
    getRecipes = async () => {
        const recipes = await fetch('http://localhost:9000/recipe');
        const recipesParsedJSON = await recipes.json();

        // console.log(recipesParsedJSON);

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
        const deletedRecipe = await fetch(`http://localhost:9000/recipe/${id}`,
        {method: 'DELETE'});
        const deletedRecipeParsed = await deletedRecipe.json();
        this.setState({recipes: this.state.recipes.filter((recipe) => recipe._id !== id)});
        console.log(deletedRecipeParsed, ' this recipe was deleted');
    }
// handleEditChange - takes in e, sets state
    handleEditChange = async (e) => {
        // console.log("heyyyyy")
        this.setState({
            // ...this.state.recipeToEdit,
            [e.currentTarget.name]: e.currentTarget.value,
            // recipe: "nice",
            // recipeToEdit
        })
        console.log("heyyyyy")
    }


    // closeAndEdit - makes a PUT request to the server to update the edited recipe; takes in e, 
    // // fetches recipe by _id, // headers: {'Content-Type': 'application/json'},
    closeAndEdit = async (e) => {
        e.preventDefault();
        console.log("GOT HERE")
        try {
            const editResponse = await fetch('http://localhost:9000/recipe',
                {method: 'PUT',
                body: JSON.stringify({
                    title: this.state.title,
                    ingredients: this.state.ingredients,
                    instructions: this.state.instructions
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
    // opens Modal for editting movies

    openAndEdit = (recipeFromTheList) => {
        console.log(recipeFromTheList, ' recipeToEdit  ');
        this.setState({
          showEditModal: true,
          recipeToEdit: {
            ...recipeFromTheList
          }
        })
      }
    render(){
        // console.log(this.state);
        return(
            <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                    <Grid.Row>
                        <Grid.Column>
                        <h1>Recipe app under construction</h1>
                            <CreateRecipe addRecipe={this.addRecipe}/>
                        </Grid.Column>
                        <Grid.Column>
                            <UserRecipeList openAndEdit={this.openAndEdit} deleteRecipe={this.deleteRecipe} recipes={this.state.recipes}/>
                        </Grid.Column>
                        <EditRecipe  open={this.state.showEditModal} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
                    </Grid.Row>
            </Grid>
        )
    }
}

export default RecipeContainer;