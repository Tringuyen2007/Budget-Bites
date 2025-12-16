import { useState } from 'react'
import CalorieDisplay from '../components/CalorieDisplay'
import AddFood from '../components/AddFood'

function Dashboard() {
  const [calories, setCalories] = useState(2000)
  const [foodLog, setFoodLog] = useState([])

  const addFoodItem = (item) => {
    setFoodLog([...foodLog, item])
  }

  const totalCaloriesConsumed = foodLog.reduce((total, item) => total + item.calories, 0);
  const caloriesRemaining = calories - totalCaloriesConsumed;

  return (
    <div className="app-container">
      <CalorieDisplay CurrentCalories={caloriesRemaining} onUpdateGoal={setCalories} />
      <AddFood addFoodItem={addFoodItem} />

      <div className="card mt-20">
        <h3 className="text-center">History</h3>
        {foodLog.length === 0 ? <p className="text-center">No food logged yet.</p> : (
          <ul className="history-list">
            {foodLog.map((item, index) => (
              <li key={index} className="history-item">
                <span>{item.name}</span>
                <span className="history-calories">{item.calories}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dashboard
