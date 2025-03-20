import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './meal.css';
const Meal = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => setMeals(res.data.meals));
  });
  return <div>Meal</div>;
};

export default Meal;
