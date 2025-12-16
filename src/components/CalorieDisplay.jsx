import { useState } from 'react';

function CalorieDisplay({ CurrentCalories, onUpdateGoal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSave = () => {
        if (inputValue) {
            onUpdateGoal(parseInt(inputValue));
            setIsEditing(false);
            setInputValue("");
        }
    }
    return (
        <div className="card text-center relative-container">
            <button
                onClick={() => setIsEditing(!isEditing)}
                className="edit-toggle-btn"
            >
                ...
            </button>

            {isEditing ? (
                <div className="edit-form-container">
                    <h3>Set New Goal</h3>
                    <div className="edit-form-row">
                        <input
                            type="number"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="New Goal"
                            className="input-field edit-input-small"
                        />
                        <button onClick={handleSave}>Update</button>
                    </div>
                </div>
            ) : (
                <>
                    <h2>Calories Remaining</h2>
                    <p className="large-number">{CurrentCalories}</p>
                </>
            )}
        </div>
    )
}

export default CalorieDisplay;
