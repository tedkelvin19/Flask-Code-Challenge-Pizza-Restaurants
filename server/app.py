from flask import Flask, jsonify, make_response
from  flask_migrate import Migrate
from flask_restful  import Api, Resource
from model import db, Restaurant, Pizza, RestaurantPizza
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///restaurant.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
migrate = Migrate(app,db)

db.init_app(app)
api = Api(app)
class Restaurants(Resource):
    def get(self):
        restaurants = [restaurants.serialize() for restaurants in Restaurant.query.all()]
        return make_response(jsonify(restaurants), 200)
api.add_resource(Restaurants, '/restaurants')
class Pizzas(Resource):
    def get(self):
        pizzas = [pizzas.serialize() for pizzas in Pizza.query.all()]
        return make_response(jsonify(pizzas), 200)
api.add_resource(Pizzas, '/pizzas')    

class RestaurantPizzas(Resource):
    def get(self):
        restaurant_pizzas = [restaurant_pizzas.serialize() for restaurant_pizzas in RestaurantPizza.query.all()]
        return make_response(jsonify(restaurant_pizzas), 200)
api.add_resource(RestaurantPizzas, '/restaurant_pizzas')
if __name__ == '__main__':
    app.run(port=5555,debug=True)