import { useState } from "react";
import "./App.css";
import { Row, Divider, Button } from "antd";
import foods from "./foods.json";
import Foodbox from "./component/Foodbox";
import AddFoodForm from "./component/AddFoodForm";
import Search from "./component/Search";

function App() {
  const [foodState, setFoodState] = useState(foods);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  console.log (search)

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setFoodState((prevFoodState) => {
      return [
        ...prevFoodState,
        { name, image, calories, servings, },
      ];
    });
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

   
  function deleteFood(name) {
    const filterArray= foodState.filter(food => food.name !== name)
    setFoodState([...filterArray])
    
  }
  const toggleForm = () => {
    setShowForm(!showForm);
  }




  return (
    <div className="App">
      {/* Display Add Food component here */}
      {showForm ? 
      <AddFoodForm
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        calories={calories}
        setCalories={setCalories}
        servings={servings}
        setServings={setServings}
        foodState={foodState}
        setFoodState={setFoodState}
        handleSubmit={handleSubmit}
      /> : null
      }

      <Button onClick={() => toggleForm()}> {showForm ? 'hide form ':'add new food'} </Button>

      {/* Display Search component here */}
      <Search 
        search={search}
        setSearch={setSearch}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
      {foodState.length === 0 ? 'no more content': '' }
        {foodState.map((food) => (
          food.name.toLowerCase().includes(search.toLowerCase()) ? 
           <Foodbox key ={food.name} food={food} deleteFood={deleteFood}/> : ""
        ))}
     
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}
export default App;
