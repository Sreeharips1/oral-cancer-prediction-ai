import pandas as pd

df = pd.read_csv(
    "dataset/GSE37991_non-normalized.txt",
    sep="\t"
)

print("Shape:")
print(df.shape)

print("\nColumns:")
print(df.columns[:10])

print("\nFirst 5 rows:")
print(df.head())