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
        <div className="card" style={{ marginTop: '20px' }}>
            <h3>Log Food</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="Food Name (e.g. Apple)"
                    style={{ padding: '8px', fontSize: '16px' }}
                />
                <input
                    type="number"
                    value={foodCalories}
                    onChange={(e) => setFoodCalories(e.target.value)}
                    placeholder="Calories"
                    style={{ padding: '8px', fontSize: '16px' }}
                />
                <button onClick={handleSubmit}>Add Food</button>
            </div>
        </div>
    )
}

export default AddFood;
