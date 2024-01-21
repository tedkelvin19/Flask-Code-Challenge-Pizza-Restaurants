from app import app
from model import db, Restaurant, Pizza, RestaurantPizza

with app.app_context():
    Restaurant.query.delete()
    Pizza.query.delete()
    RestaurantPizza.query.delete()

    # Create restaurants
    restaurant1 = Restaurant(name='Italiano', address='123 Main St')
    restaurant2 = Restaurant(name='Pizzaria', address='456 Elm St')
    restaurant3 = Restaurant(name='Sushi Bar', address='789 Oak St')


    # Create pizzas
    pizza1 = Pizza(name='Margherita', ingredients='Tomato, Mozzarella, Basil')
    pizza2 = Pizza(name='Pepperoni', ingredients='Tomato, Mozzarella, Pepperoni')
    pizza3 = Pizza(name='Hawaiian', ingredients='Tomato, Mozzarella, Ham, Pineapple')

    # Create restaurant pizzas
    restaurant_pizza1 = RestaurantPizza(restaurant=restaurant1, pizza=pizza1, price=15.99)
    restaurant_pizza2 = RestaurantPizza(restaurant=restaurant1, pizza=pizza2, price=18.99)
    restaurant_pizza3 = RestaurantPizza(restaurant=restaurant2, pizza=pizza1, price=16.99)
    restaurant_pizza4 = RestaurantPizza(restaurant=restaurant2, pizza=pizza3, price=17.99)

    # Add and commit to the database
    db.session.add_all([restaurant1, restaurant2,restaurant3, pizza1, pizza2, pizza3, restaurant_pizza1, restaurant_pizza2, restaurant_pizza3, restaurant_pizza4])
    db.session.commit()