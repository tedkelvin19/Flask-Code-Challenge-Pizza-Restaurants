import {Link} from 'react-router-dom';
import pizza from "../pizza.png";
function Navbar() {
    return (
      <header>
        <div className="navbar">
          <img src={pizza} alt="Pizza-logo" />
          <nav>
          <Link to="/">Home</Link>
        </nav>
         
        </div>
        <h1>The Pizza Restaurants</h1>
      </header>
    );
  }
  
  export default Navbar;