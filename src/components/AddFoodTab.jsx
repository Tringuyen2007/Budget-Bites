function AddFoodTab({ currentMeal }) {
    return (
        <div>
            <h3>Add Food</h3>
            <p>Search and add individual foods to {currentMeal}</p>
            <input
                type="text"
                placeholder="Search for foods..."
                className="search-input"
            />
            {/* Food list will go here */}
        </div>
    );
}

export default AddFoodTab;