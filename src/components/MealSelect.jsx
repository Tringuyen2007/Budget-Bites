function MealSelect({ mealName, foods, onAddFood }) {
    return (
        <div className="card-meal">
            <h3>{mealName}</h3>
            <ul className="food-list">
                {foods.map((food, index) => (
                    <li key={index}>{food.name} - {food.calories} cal</li>
                ))}
            </ul>
            <button onClick={onAddFood}>+ Add Food</button>
        </div>
    );
}

export default MealSelect;