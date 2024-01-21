import {useEffect,  useState} from 'react';
import {useParams} from 'react-router-dom';
import PizzaForm from './PizzaForm';

function Home(){
    const[{data: restaurant, error, status}, setRestaurant] = useState({data: null, error: null, status: 'pending'});
    const {id} = useParams();
    useEffect(()=> {
        fetch(`/restaurants/${id}`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setRestaurant({data: data, error: null, status: 'resolved'});
                })
            } else {
                response.json().then(data => {
                    setRestaurant({data: null, error: data, status: 'rejected'});
                })
            }
        })
    }, [id]);

    function handleAddPizza(newPizza){
        setRestaurant({data: {...restaurant, pizzas: [...restaurant.pizzas, newPizza]}, error: null, status: 'resolved'});
    }

    if (status === 'pending') {
        return <p>Loading...</p>
    } else if (status === 'rejected') {
        return <p>{error.message}</p>
    }

    return (
        <section className='container'>
            <div className='card'>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.address}</p>
            </div>
            <div className='card'>
                <h2>Pizza Menu</h2>
                {restaurant.pizzas.map(pizza => <p key={pizza.id}>{pizza.name}</p>)}
            </div>
            <div className='card'>
                <h2>Add a new pizza</h2>
                <PizzaForm restaurantId={id} onPizzaSubmit={handleAddPizza}/>
            </div>
        </section>
    )
}

export default Home

