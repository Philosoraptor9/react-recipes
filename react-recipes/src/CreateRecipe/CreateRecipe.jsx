import React, { Component } from 'react';

// Component that sets state as an empty recipe, then resets it to the created recipe using
// // an updateRecipe function that takes in e, renders a form for creating recipe title, 
// // instructions, and ingredients

class CreateRecipe extends Component {
    constructor(){
        super();
            this.state = {
                title: '',
                ingredients: '',
                instructions: ''
            }
        }
    updateRecipe = (e) =>{
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
        }
    render(){
        return(
            <form>
                <label>
                    Title:
                </label>
                <br />
                <label>
                    Ingredients:
                </label>
                <br />
                <label>
                    Instructions:
                </label>
            
            </form>
        )
    }
}

export default CreateRecipe;