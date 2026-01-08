import { useState } from 'react';
import StreakDisplay from '../components/StreakDisplay';
import MealSelect from '../components/MealSelect';
import AddFoodModal from '../components/AddFoodModal';

function FoodLog({ goalCalories }) {
    const [consumedCalories, setConsumedCalories] = useState(0);
    const remaining = goalCalories - consumedCalories;
    //food log
    const [meals, setMeals] = useState({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snacks: []
    });
    const handleAddFood = (mealType) => {
        SetCurrentMeal(mealType);
        setIsModalOpen(true);
    };

    //food modal const
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMeal, SetCurrentMeal] = useState('');
    return (
        <div className="food-log-container">
            <div className="card-foodlog">
                <h2>Calories Remaining {remaining}</h2>
                <p>Goal: {goalCalories} | Consumed: {consumedCalories}</p>
            </div>
            <StreakDisplay />
            <MealSelect
                mealName="Breakfast"
                foods={meals.Breakfast}
                onAddFood={() => handleAddFood('Breakfast')} />
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
            <AddFoodModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>
    );

}
export default FoodLog;

