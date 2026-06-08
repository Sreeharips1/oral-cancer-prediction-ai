from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS

from predict import predict_cancer

from demo_predict import (
    predict_sample
)

from file_predict import predict_file

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

@app.route(
    "/predict-file",
    methods=["POST"]
)
def predict_uploaded_file():

    try:

        file = request.files["file"]

        result = predict_file(file)

        return jsonify(result)

    except Exception as e:

        print(e)

        return jsonify({
            "error": str(e)
        }), 500




if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )