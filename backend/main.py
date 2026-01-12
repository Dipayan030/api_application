from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# # Machine learning model and scaler loading
# with open('model-1.pkl', 'rb') as file:
#     model = pickle.load(file)
# with open('scaler-1.pkl', 'rb') as file:
#     scaler = pickle.load(file)

# API Endpoints
@app.route('/weather', methods=['GET', 'POST'])
def weather():
    hello_user = {
        "message": "Hello, User! Welcome to the API.",
        "status": "success",
        "app": "Weather Application"
    }
    return jsonify(hello_user)

# @app.route('/', methods=['POST'])
# def add_item():
#     new_item = request.get_json()
#     new_item['id'] = len(items) + 1
#     items.append(new_item)
#     return jsonify(new_item), 201

if __name__ == '__main__':
    app.run(debug=True)

