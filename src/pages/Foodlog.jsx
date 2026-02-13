import { useState } from 'react';
import './Foodlog.css';
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
        <div className="app-container food-log-container">
            <StreakDisplay />


            <div className="card-foodlog-modal">
                <h2>Calories Remaining {remaining}</h2>
                <p>Goal: {goalCalories} | Consumed: {consumedCalories}</p>
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
                    currentMeal={currentMeal} />


            </div>

        </div>
    );

}
export default FoodLog;

