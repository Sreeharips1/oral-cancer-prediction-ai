import pandas as pd
import os

df = pd.read_csv(
    "dataset/final_selected_dataset.csv"
)

os.makedirs(
    "sample_files",
    exist_ok=True
)

healthy = df[df["Label"] == 0].iloc[[0]]
cancer = df[df["Label"] == 1].iloc[[0]]

healthy.to_csv(
    "sample_files/healthy_patient.csv",
    index=False
)

cancer.to_csv(
    "sample_files/oral_cancer_patient.csv",
    index=False
)

print("Files Created Successfully")