import numpy as np

from model_loader import model

def predict_cancer(features):

    data = np.array(
        features
    ).reshape(1, -1)

    prediction = model.predict(data)[0]

    probability = max(
        model.predict_proba(data)[0]
    ) * 100

    return {
        "prediction":
            "Oral Cancer"
            if prediction == 1
            else "Healthy",

        "probability":
            round(probability, 2)
    }