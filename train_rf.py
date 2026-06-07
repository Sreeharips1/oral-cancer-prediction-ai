import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report

import joblib

df = pd.read_csv(
    "dataset/final_selected_dataset.csv"
)

X = df.drop(
    columns=["Label"]
)

y = df["Label"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

pred = model.predict(X_test)

print(
    "Accuracy:",
    accuracy_score(y_test, pred)
)

print(
    classification_report(
        y_test,
        pred
    )
)

joblib.dump(model, "models/oral_cancer_rf.pkl")

print("Model Saved")