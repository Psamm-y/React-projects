import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';
import './meal2.css';
const Meal2 = () => {
  const id = useId();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const mealsList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    console.log(meals);
    return (
      <section className="card">
        <img src={strMealThumb} alt="" />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal} </p>
        </section>
      </section>
    );
  });
  return (
    <div className="meal-page" key={id}>
      {mealsList}
    </div>
  );
};

export default Meal2;
