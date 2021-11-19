import logo from './logo.svg';
import './App.css';
import data from "./db.json"
import RestaurantCard from './components/restaurantCard';
import AddRestaurantForm from "./components/addRestaurantForm"
import SortingButton from './components/sortingButtons';
import {useState} from 'react'

function App() {
  // console.log(data.restaurants)
  const [restaurants, setRestaurants] = useState(data.restaurants);

  const [formValues, setFormValues] = useState({
    "restaurantName": "",
    "restaurantCategories": "",
    "heroImage": "",
    "paymentMethods": ""
});

const handleChange = (e) => {
  const payload = {
    ...formValues
  }
  payload[e.target.name] = e.target.value;
  setFormValues(payload)
}

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  const payload = {
    "name": formData.get("restaurantName"),
    "categories": formData.get("restaurantCategories").split(", "),
    "heroImage": formData.get("heroImage"),
    "paymentMethods": formData.get("paymentMethods").split(", "),
    "rating": 0,
    "numberOfReviews": 0
  }
  setRestaurants([...restaurants, payload])
}

const filteredRestaurants = (rating) => {
  const filteredResults = restaurants.filter( el => el.rating >= rating);
  console.log(filteredResults)
  return (
    <>
    <AddRestaurantForm handleChange = {handleChange} formValues = {formValues} onSubmit = {handleSubmit} />    
    <div style = {{marginTop: "20px", textAlign: "center"}}>
      <h1>{filteredResults.length} Restaurants Near You</h1>
      <div className = "sortingButtons">
        <SortingButton text = "4 Stars" rating = {4} onClick = {filteredRestaurants} />
        <SortingButton text = "3 Stars" rating = {3} onClick = {filteredRestaurants} />
        <SortingButton text = "2 Stars" rating = {2} onClick = {filteredRestaurants} />
        <SortingButton text = "1 Stars" rating = {2} onClick = {filteredRestaurants} />
      </div>
    </div>
    <div className = "listOfRestaurants">
      
      { filteredResults.map( (item) => {
        return <RestaurantCard restaurantData = {item} />
      }) }
    </div>
    </>
  );
}

  return (
    <>
    <AddRestaurantForm handleChange = {handleChange} formValues = {formValues} onSubmit = {handleSubmit} />    
    <div style = {{marginTop: "20px", textAlign: "center"}}>
      <h1>{restaurants.length} Restaurants Near You</h1>
      <div className = "sortingButtons">
        <SortingButton text = "4 Stars" rating = {4} onClick = {filteredRestaurants} />
        <SortingButton text = "3 Stars" rating = {3} onClick = {filteredRestaurants} />
        <SortingButton text = "2 Stars" rating = {2} onClick = {filteredRestaurants} />
        <SortingButton text = "1 Stars" rating = {2} onClick = {filteredRestaurants} />
      </div>
    </div>
    <div className = "listOfRestaurants">
      
      { restaurants.map( (item) => {
        return <RestaurantCard restaurantData = {item} />
      }) }
      {/* <RestaurantCard restaurantData = {data.restaurants[1]} /> */}
    </div>
    </>
  );
}

export default App;
