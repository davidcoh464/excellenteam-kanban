import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navbar-head">
            <header>
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <Link to="/settings" className="nav-link">Settings</Link>
                </nav>
            </header>
        </div>
    );
}
