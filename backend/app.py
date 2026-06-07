from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS

from predict import predict_cancer

from demo_predict import (
    predict_sample
)

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "Oral Cancer Prediction API Running"
    })
    
    
@app.route(
    "/predict-demo",
    methods=["POST"]
)
def predict():

    data = request.json

    result = predict_sample(
        data["sampleId"]
    )

    return jsonify(result)    

# @app.route("/predict", methods=["POST"])

# def predict():

#     data = request.json

#     features = data["features"]

#     result = predict_cancer(
#         features
#     )

#     return jsonify(result)



if __name__ == "__main__":

    app.run(
        debug=True
    )