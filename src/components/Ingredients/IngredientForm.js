import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const inputState = useState({title: '', ammount: ''});

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text" 
              id="title" 
              value={inputState[0].title} 
              onChange={event => {
                const newTitle = event.target.value;
                inputState[1](prevInputState => ({title: newTitle, ammount: prevInputState.ammount}))}}   
            />
          </div>
          <div className="form-control">
            <label htmlFor="ammount">Ammount</label>
            <input 
              type="number" 
              id="ammount" 
              value={inputState[0].ammount} 
              onChange={event => {
                const newAmmount = event.target.value;
                inputState[1](prevInputState => ({ammount: newAmmount, title: prevInputState.title}))}}
              />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
