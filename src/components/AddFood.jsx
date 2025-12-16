import { useState } from 'react';

function AddFood({ addFoodItem }) {
    const [foodName, setFoodName] = useState("");
    const [foodCalories, setFoodCalories] = useState("");

    const handleSubmit = () => {
        if (foodName && foodCalories) {
            addFoodItem({ name: foodName, calories: parseInt(foodCalories) });
            setFoodName("");
            setFoodCalories("");
        }
    }

    return (
        <div className="card mt-20">
            <h3 style={{ textAlign: 'center' }}>Log Food</h3>
            <div className="form-column">
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="Food Name (e.g. Apple)"
                    className="input-field"
                />
                <input
                    type="number"
                    value={foodCalories}
                    onChange={(e) => setFoodCalories(e.target.value)}
                    placeholder="Calories"
                    className="input-field"
                />
                <button onClick={handleSubmit}>Add Food</button>
            </div>
        </div>
    )
}

export default AddFood;
