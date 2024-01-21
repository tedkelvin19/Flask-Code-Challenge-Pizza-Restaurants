import {useEffect, useState} from 'react';

function PizzaForm({restaurantId, onPizzaSubmit}) {
    const [pizzas, setPizzas] = useState([]);
    const [pizzaId, setPizzaId] = useState('');
    const [price, setPrice] = useState('');
    const [formErrors, setFormError] = useState([]);

    useEffect(() => {
        fetch('/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data));
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            restaurant_id: restaurantId,
            pizza_id: pizzaId,
            price: parseInt(price)
        };

        fetch('/pizzas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    setFormError(data.errors);
                } else {
                    onPizzaSubmit(data);
                }
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <select
                value={pizzaId}
                onChange={event => setPizzaId(event.target.value)}
            >
                <option value="">Choose a pizza...</option>
                {pizzas.map(pizza => (
                    <option key={pizza.id} value={pizza.id}>
                        {pizza.name}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button type="submit">Add Pizza</button>
            {formErrors.length > 0 && (
                <ul>
                    {formErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
        </form>   
    )
}

export default PizzaForm;