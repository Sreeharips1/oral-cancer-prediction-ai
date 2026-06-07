import pandas as pd
import joblib

model = joblib.load(
    "models/oral_cancer_rf.pkl"
)

df = pd.read_csv(
    "../dataset/final_selected_dataset.csv"
)

samples = {}

healthy_count = 1
cancer_count = 1

for index, row in df.iterrows():

    if row["Label"] == 0:

        sample_id = f"H{healthy_count}"
        healthy_count += 1

        actual = "Healthy"

    else:

        sample_id = f"C{cancer_count}"
        cancer_count += 1

        actual = "Oral Cancer"

    samples[sample_id] = {
        "features": row.drop("Label").tolist(),
        "actual": actual
    }


def predict_sample(sample_id):

    sample = samples[sample_id]

    prediction = model.predict(
        [sample["features"]]
    )[0]

    probability = max(
        model.predict_proba(
            [sample["features"]]
        )[0]
    ) * 100

    return {
        "sample": sample_id,
        "actual":
        sample["actual"],

        "prediction":
        "Healthy"
        if prediction == 0
        else "Oral Cancer",

        "confidence":
        round(probability, 2)
    }