import { useState } from 'react';
function StreakDisplay() {
    const [streak] = useState(0)

    return (
        <div className="card-streak-container">
            <div className="fire-icon"></div>
            {streak} Day Streak
        </div>
    );
}

export default StreakDisplay;