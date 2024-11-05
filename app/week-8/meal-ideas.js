"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || []; 
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="text-white">
      <h2 className="font-bold text-2xl">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <p>{meal.strMeal}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}
