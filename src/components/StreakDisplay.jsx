import { useState } from 'react';
function StreakDisplay() {
    const [streak, setStreak] = useState(0)

    return (
        <div className="streak-container">
            <div className="fire-icon"></div>
            {streak} Day Streak
        </div>
    );
}

export default StreakDisplay;