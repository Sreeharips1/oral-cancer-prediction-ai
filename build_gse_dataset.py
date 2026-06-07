import pandas as pd

df = pd.read_csv(
    "dataset/GSE37991_non-normalized.txt",
    sep="\t"
)

gene_ids = df["ID_REF "]

sample_cols = []

for col in df.columns:

    col = str(col)

    if col.startswith("N") or col.startswith("T"):

        if "Detection" not in col:
            sample_cols.append(col)

print("Samples Found:", len(sample_cols))

expr_df = df[sample_cols]

ml_df = expr_df.T

ml_df.columns = gene_ids

ml_df.reset_index(inplace=True)

ml_df.rename(
    columns={"index": "Sample"},
    inplace=True
)

ml_df["Label"] = ml_df["Sample"].apply(
    lambda x: 0 if x.startswith("N") else 1
)

print("Shape:", ml_df.shape)

print("\nLabels:")
print(ml_df["Label"].value_counts())

ml_df.to_csv(
    "dataset/final_ml_dataset.csv",
    index=False
)

print("\nDataset Saved")