import { useState } from "react";

function Budget() {
    const [budget, setBudget] = useState(100);
    const [inputValue, setInputValue] = useState("");
    const handleUpdate = () => {
        if (inputValue) {
            setBudget(parseInt(inputValue));
            setInputValue("");
        }
    }
    return (
        <div className="budget-container">
            <h2 id="budget">$ {budget}</h2>
            { }
            <div className="edit-form-container">
                <h3 className="budget-title">Set Budget</h3>
                <div className="edit-form-row">
                    <input
                        type="number"
                        placeholder="Amount in USD"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default Budget;