import { useState } from 'react';
import AddFoodTab from './AddFoodTab';
import MyRecipesTab from './MyRecipesTab';
import MyMealsTab from './MyMealsTab';

function AddFoodModal({ isOpen, onClose, currentMeal }) {
    const [activeTab, setActiveTab] = useState('addfood')
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>X</button>
                <div className="Tab-Container">
                    <button
                        className={activeTab === 'addfood' ? 'active' : ''}
                        onClick={() => setActiveTab('addfood')}>Add Food</button>
                    <button
                        className={activeTab === 'recipes' ? 'active' : ''}
                        onClick={() => setActiveTab('recipes')}>My Recipes</button>
                    <button
                        className={activeTab === 'meals' ? 'active' : ''}
                        onClick={() => setActiveTab('meals')}>My Meals</button>
                </div>

                <div className="tab-content">
                    {activeTab === 'addfood' && (
                        <AddFoodTab
                            currentMeal={currentMeal}
                        />
                    )}
                    {activeTab === 'recipes' && (
                        <MyRecipesTab
                            currentMeal={currentMeal}
                        />
                    )}
                    {activeTab === 'meals' && (
                        <MyMealsTab
                            currentMeal={currentMeal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddFoodModal;