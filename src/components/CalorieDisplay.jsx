function CalorieDisplay({ CurrentCalories }) {
    return (
        <div className="card text-center">
            <h2>Calories Remaining</h2>
            <p className="large-number">{CurrentCalories}</p>
        </div>
    )
}

export default CalorieDisplay