from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)

class Restaurant(db.Model,SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    
    restaurant_pizzas = db.relationship('RestaurantPizza', backref='restaurant', lazy=True) 
    serialize_rules = ("-restaurant_pizzas.restaurant",)


class Pizza(db.Model,SerializerMixin):
    __tablename__ = 'pizzas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    ingredients = db.Column(db.String(200), nullable=False)

    restaurant_pizzas = db.relationship('RestaurantPizza', backref='pizza', lazy=True)
    serialize_rules = ("-restaurant_pizzas.pizza",)

class RestaurantPizza(db.Model,SerializerMixin):
    __tablename__ = 'restaurant_pizzas'

    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    pizza_id = db.Column(db.Integer, db.ForeignKey('pizzas.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    
    serialize_rules = (
        "-restaurant.restaurant_pizzas",
        "-pizza.restaurant_pizzas",
    )

    @validates('price')
    def validate_price(self, key, value):
        if not (1 <= value <= 30):
            raise ValueError('Price must be between 1 and 30')
        return value