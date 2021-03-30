import React, {useState, useEffect} from 'react'

export default function Meal({meal}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5c856260ede643f9bc82edd937560738&includeNutrition=false`
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image);
      console.log(data)
    })
    .catch(() => {
      console.log("error");
    })
  }, [meal.id])

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preperation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl} >Go To Recipe</a>
    </article>
  )
}
