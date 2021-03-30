import React from 'react';
import Meal from "./Meal";

export default function MealList({mealData}){
  const nutrients = mealData.nutrients;
  console.log(mealData);

  return(
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories}</li>
          <li>Calories: {nutrients.carbohydrates}</li>
          <li>Calories: {nutrients.fat}</li>
          <li>Calories: {nutrients.protien}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  )
}