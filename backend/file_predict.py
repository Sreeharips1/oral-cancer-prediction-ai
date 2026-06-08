import pandas as pd
import joblib

model = joblib.load(
    "models/oral_cancer_rf.pkl"
)

def predict_file(file):

    df = pd.read_csv(file)

    if "Label" in df.columns:
        df = df.drop(columns=["Label"])

    prediction = model.predict(df)[0]

    confidence = max(
        model.predict_proba(df)[0]
    ) * 100
    
    print("Received File")
    print(df.shape)

    return {
        "prediction":
        "Healthy"
        if prediction == 0
        else "Oral Cancer",

        "confidence":
        round(confidence, 2)
    }