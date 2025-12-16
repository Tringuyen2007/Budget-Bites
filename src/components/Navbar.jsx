import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bottom-nav">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/Budget" className="nav-link">Budget</Link>
            <Link to="/profile" className="nav-link">Profile</Link>

        </nav>
    );
}

export default Navbar;
