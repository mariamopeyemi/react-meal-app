import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem 
    key={meal.id} 
    name={meal.name}
    price={meal.price}
    description={meal.description}
    />);
  
    return (
      <SectionMeals >
        < CardCan>
            <ul>{mealsList}</ul>
        </CardCan>
      </SectionMeals>
    );
  };
  
  export default AvailableMeals;

  const SectionMeals= styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

 

@keyframes meals-appear {
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  `
 export const CardCan = styled.section`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
 `