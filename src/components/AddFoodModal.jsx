import { useState } from 'react';

function AddFoodModal({ isOpen, onClose }) {
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
                            onAddFood={onAddFood}
                            currentMeal={currentMeal}
                        />
                    )}
                    {activeTab === 'recipes' && (
                        <MyRecipesTab
                            onAddRecipe={onAddFood}
                            currentMeal={currentMeal}
                        />
                    )}
                    {activeTab === 'meals' && (
                        <MyMealsTab
                            onAddMeal={onAddFood}
                            currentMeal={currentMeal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddFoodModal;