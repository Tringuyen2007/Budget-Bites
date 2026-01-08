import { useState } from 'react'
import CalorieDisplay from '../components/CalorieDisplay'

function Dashboard({ goalCalories, setGoalCalories }) {
  const caloriesRemaining = goalCalories;

  return (
    <div className="app-container">
      <CalorieDisplay CurrentCalories={caloriesRemaining} onUpdateGoal={setGoalCalories} />
    </div>
  )
}

export default Dashboard
