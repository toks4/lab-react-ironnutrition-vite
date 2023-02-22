
import React from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
   

  return (
    <div>
        <form onSubmit= {props.handleSubmit}>

      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={props.name} type="text" onChange={event => props.setName (event.target.value)} />

      <label>Image</label>
      <Input value={props.image} type="text" onChange={event => props.setImage( event.target.value)} />

      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={props.calories} type="text" onChange={event => props.setCalories( event.target.value)} />

      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={props.servings} type="text" onChange={event => props.setServings( event.target.value)} />

      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm