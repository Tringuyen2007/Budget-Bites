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

      <div className="card" style={{ marginTop: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>History</h3>
        {foodLog.length === 0 ? <p style={{ textAlign: 'center' }}>No food logged yet.</p> : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {foodLog.map((item, index) => (
              <li key={index} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 'bold' }}>{item.calories}</span>
              </li>
            ))}
          </ul>
        )}
      </div>


    </div>
  )
}

export default Dashboard
