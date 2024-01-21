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
                    <Link to="/Pizza">Pizzas</Link>
                </li>
                <li>
                    <Link to="/restaurantpizza">RestaurantPizza</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar