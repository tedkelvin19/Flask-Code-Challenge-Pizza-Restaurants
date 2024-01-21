import {Link} from 'react-router-dom';
import pizza from "../pizza.png";
function Navbar() {
    return (
        <nav className="navbar">
            <img src={pizza} alt="pizza logo"/>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar