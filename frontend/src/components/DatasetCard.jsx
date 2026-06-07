export default function DatasetCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Dataset Information</h2>

      <div className="space-y-2">
        <p>
          <strong>Dataset:</strong> GSE37991
        </p>

        <p>
          <strong>Disease:</strong> Oral Squamous Cell Carcinoma
        </p>

        <p>
          <strong>Samples:</strong> 80
        </p>

        <p>
          <strong>Original Features:</strong> 24,526
        </p>

        <p>
          <strong>Selected Features:</strong> 500
        </p>
      </div>
    </div>
  );
}
