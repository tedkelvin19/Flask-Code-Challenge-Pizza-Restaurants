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
        restaurants = [restaurant.to_dict() for restaurant in Restaurant.query.all()]
        return make_response(jsonify(restaurants),200)
api.add_resource(Restaurants, '/restaurants')

if __name__ == '__main__':
    app.run(port=5555,debug=True)