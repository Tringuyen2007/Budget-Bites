import { useState } from 'react'
import './Start_page.css'
import CalorieDisplay from './components/CalorieDisplay'

function Start_page() {
  const [calories, setCalories] = useState(2000)

  return (
    <div class="app-container">
      <CalorieDisplay CurrentCalories={calories} />
      <nav className="navbar">Budget Bites</nav>
    </div>
  )
}

export default Start_page
