import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoRestaurant } from 'react-icons/io5';
import './meal.css';
const Meal = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
        console.log(res.data);
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealsList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="Meal Thumbnail" />
        <section className="content">
          <p>{strMeal}</p>
          <p>meal id: #{idMeal}</p>
        </section>
      </section>
    );
  });
  return (
    <>
      <h1>
        <IoRestaurant />
        Psammy restaurant
      </h1>
      <div className="items-container">{mealsList}</div>
    </>
  );
};

export default Meal;
