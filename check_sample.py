import pandas as pd

df = pd.read_csv("sample_files/healthy_patient.csv")

print(df.shape)
print(df.columns[-10:])