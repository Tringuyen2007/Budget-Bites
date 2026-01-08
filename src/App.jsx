import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Budget from './pages/Budget';
import FoodLog from './pages/Foodlog';
import StreakDisplay from './components/StreakDisplay';
import MealSelect from './components/MealSelect';

function App() {
    const [goalCalories, setGoalCalories] = useState(2000);
    return (
        <Router>
            <div style={{ paddingBottom: '60px' }}> {/* Add padding so content isn't hidden behind fixed navbar */}
                <Routes>
                    <Route path="/" element={<Dashboard goalCalories={goalCalories} setGoalCalories={setGoalCalories} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/foodlog" element={<FoodLog goalCalories={goalCalories} />} />
                    <Route path="/mealselect" element={<MealSelect />} />
                </Routes>
                <Navbar />
            </div>
        </Router>
    )
}

export default App;
