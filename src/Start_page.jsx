import { useState } from 'react'
import './Start_page.css'
import CalorieDisplay from './components/CalorieDisplay'
import EditGoal from './components/EditGoal'

function Start_page() {
  const [calories, setCalories] = useState(2000)

  return (
    <div class="app-container">
      <CalorieDisplay CurrentCalories={calories} />
      <EditGoal updateCalories={setCalories} />
      <nav className="navbar">Budget Bites</nav>
    </div>
  )
}

export default Start_page
