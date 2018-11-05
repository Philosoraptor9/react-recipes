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
            <Segment>
                <h4>Create A New Recipe</h4>
                <Form onSubmit={this.props.addRecipe.bind(null, this.state)}>
                <Label htmlFor="name=title">Recipe:</Label>
                <Form.Input type='text' name='title' value={this.state.title} onChange={this.updateRecipe}/>
                <Label>Ingredients:</Label>
                <Form.Input type='text' name='ingredients' value={this.state.ingredients} onChange={this.updateRecipe}/>

                <Button color="green" type='Submit'>Create Recipe</Button>
                </Form>
      </Segment>
      )
  }
}

export default CreateRecipe;