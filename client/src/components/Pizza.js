import {useEffect,useState} from 'react';

import {Link} from 'react-router-dom';


function Pizza() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('/pizzas')
            .then(response => response.json())
            .then((data) => setPizzas(data));
    }, []);


    return (
        <section className="container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="card">
            <h2>
              <Link to={`/pizzas/${pizza.id}`}>{pizza.name}</Link>
            </h2>
            <p>Ingredients: {pizza.ingredients}</p>
          </div>
        ))}
      </section>
    );
}
 export default Pizza