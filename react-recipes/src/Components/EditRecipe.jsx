import React from 'react'
import {Form, Button, Label, Header } from 'semantic-ui-react';

// Pure function that takes in props and returns forms to edit recipe ingredients and instructions
const EditRecipe = (props) => {
    // console.log(props)
    return (
        <Form onSubmit={props.closeAndEdit}>
            <Header>Edit Recipe</Header>
            <Label>
              Edit Recipe Title:
            </Label>
            <Form.Input type='text' name='title' value={props.recipeToEdit.title} onChange={props.handleEditChange}/>
            <Label>
              Edit Recipe Ingredients:
            </Label>
            <Form.Input type='text' name='ingredients' value={props.recipeToEdit.ingredients} onChange={props.handleEditChange}/>
            <Label>
              Edit Recipe Instructions:
            </Label>
            <Form.Input type='text' name='instructions' value={props.recipeToEdit.instructions} onChange={props.handleEditChange}/>
              <Button color='green' type='submit'>Edit Recipe</Button>
          </Form>
      )
  }

 export default EditRecipe;