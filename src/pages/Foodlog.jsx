import { useState } from 'react';
import StreakDisplay from '../components/StreakDisplay';
import MealSelect from '../components/MealSelect';

function FoodLog({ goalCalories }) {
    const [consumedCalories, setConsumedCalories] = useState(0);
    const remaining = goalCalories - consumedCalories;

    const [meals, setMeals] = useState({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snacks: []
    });
    const handleAddFood = (mealType) => {
        console.log(`Add food to ${mealType}`);
    };
    return (
        <div className="food-log-container">
            <div className="card-foodlog">
                <h2>Calories Remaining {remaining}</h2>
                <p>Goal: {goalCalories} | Consumed: {consumedCalories}</p>
            </div>
            <StreakDisplay />
            {/* <MealSelect
                mealName="Breakfast"
                foods={meals.Breakfast}
                onAddFood={() => handleAddFood('Breakfast')} /> */}
            <MealSelect
                mealName="Lunch"
                foods={meals.Lunch}
                onAddFood={() => handleAddFood('Lunch')} />
            <MealSelect
                mealName="Dinner"
                foods={meals.Dinner}
                onAddFood={() => handleAddFood('Dinner')} />
            <MealSelect
                mealName="Snacks"
                foods={meals.Snacks}
                onAddFood={() => handleAddFood('Snacks')} />

        </div>
    );

}
export default FoodLog;

