import { useState } from 'react';

function EditGoal({ updateCalories }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        if (inputValue) {
            updateCalories(inputValue);
            setInputValue(""); // Clear input after update
        }
    }

    return (
        <div className="card" style={{ marginTop: '20px' }}>
            <h3>Update Goal</h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter calories"
                    style={{ padding: '8px', fontSize: '16px' }}
                />
                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}

export default EditGoal;
