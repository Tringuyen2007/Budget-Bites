import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Budget from './pages/Budget';
import FoodLog from './pages/Foodlog';
import StreakDisplay from './components/StreakDisplay';

function App() {
    return (
        <Router>
            <div style={{ paddingBottom: '60px' }}> {/* Add padding so content isn't hidden behind fixed navbar */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/foodlog" element={<FoodLog />} />
                </Routes>
                <Navbar />
            </div>
        </Router>
    )
}

export default App;
