import { useState } from 'react';
import StreakDisplay from '../components/StreakDisplay';
import MealSelect from '../components/MealSelect';

function FoodLog({ goalCalories }) {
    const [consumedCalories, setConsumedCalories] = useState(0);
    const remaining = goalCalories - consumedCalories;
    return (
        <div className="food-log-container">
            <div className="card-foodlog">
                <h2>Calories Remaining {remaining}</h2>
                <p>Goal: {goalCalories} | Consumed: {consumedCalories}</p>
            </div>
            <StreakDisplay />

        </div>
    );

}
export default FoodLog;

