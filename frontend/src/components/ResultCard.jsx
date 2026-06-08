export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Prediction Result
        </h2>

        <div className="flex items-center justify-center h-40 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-slate-500">No prediction available</p>
        </div>
      </div>
    );
  }

  const isHealthy = result.prediction === "Healthy";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Prediction Result</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
          ${
            isHealthy
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {result.prediction}
        </span>
      </div>

      <div className="space-y-4">
        {result.patient && (
          <div className="flex justify-between border-b pb-3">
            <span className="text-slate-500">Sample ID</span>
            <span className="font-medium">{result.patient}</span>
          </div>
        )}

        {result.actual && (
          <div className="flex justify-between border-b pb-3">
            <span className="text-slate-500">Actual Label</span>
            <span className="font-medium">{result.actual}</span>
          </div>
        )}

        <div className="flex justify-between border-b pb-3">
          <span className="text-slate-500">AI Prediction</span>
          <span className="font-semibold">{result.prediction}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Confidence Score</span>
          <span className="font-semibold">{result.confidence}%</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-slate-500">Confidence</span>

          <span className="text-sm font-medium">{result.confidence}%</span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${
              isHealthy ? "bg-green-500" : "bg-red-500"
            }`}
            style={{
              width: `${result.confidence}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
