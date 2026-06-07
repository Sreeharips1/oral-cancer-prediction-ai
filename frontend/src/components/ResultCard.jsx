export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">No Prediction Yet</div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Prediction Result</h2>

      <p>
        <strong>Patient:</strong>
        {result.patient}
      </p>
      <p>
        <strong>Actual:</strong>
        {result.actual}
      </p>

      <p>
        <strong>Prediction:</strong>
        {result.prediction}
      </p>

      <p>
        <strong>Confidence:</strong>
        {result.confidence}%
      </p>
    </div>
  );
}
