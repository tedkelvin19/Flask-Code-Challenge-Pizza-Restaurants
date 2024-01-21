import {useEffect,useState} from 'react';

import {Link} from 'react-router-dom';


function RestaurantPizza() {
    const [restaurantPizzas, setRestaurantPizza] = useState([]);

    useEffect(() => {
        fetch('/restaurant_pizzas')
            .then(response => response.json())
            .then((data) => setRestaurantPizza(data));
    }, []);


    return (
        <section className="container">
        {restaurantPizzas.map((restaurantPizza) => (
          <div key={restaurantPizza.id} className="card">
            <h2>
              <Link to={`/restaurantspizza/${restaurantPizza.id}`}>{restaurantPizza.pizza_id}</Link>  
            </h2>
            <p>RestaurantPizza: {restaurantPizza.restaurant_id}</p>
            <p>Price: {restaurantPizza.price}</p>

          </div>
        ))}
      </section>
    );
}
 export default  RestaurantPizza