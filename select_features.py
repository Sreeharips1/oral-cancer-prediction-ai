import pandas as pd
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import f_classif

df = pd.read_csv(
    "dataset/final_ml_dataset.csv"
)

X = df.drop(
    columns=["Sample", "Label"]
)

y = df["Label"]

selector = SelectKBest(
    score_func=f_classif,
    k=500
)

X_new = selector.fit_transform(X, y)

selected_cols = X.columns[
    selector.get_support()
]

new_df = pd.DataFrame(
    X_new,
    columns=selected_cols
)

new_df["Label"] = y

new_df.to_csv(
    "dataset/final_selected_dataset.csv",
    index=False
)

print("Original Features:", X.shape[1])

print("Selected Features:", X_new.shape[1])

print("Saved Successfully")