import pandas as pd
import joblib

model = joblib.load(
    "models/oral_cancer_rf.pkl"
)

df = pd.read_csv(
    "../dataset/final_selected_dataset.csv"
)

sample = df.drop(
    columns=["Label"]
).iloc[0]

prediction = model.predict(
    [sample]
)

probability = model.predict_proba(
    [sample]
)

print(prediction)
print(probability)