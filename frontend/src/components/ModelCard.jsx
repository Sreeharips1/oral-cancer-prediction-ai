export default function ModelCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Model Comparison</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Random Forest</span>
          <span className="font-bold">81.25%</span>
        </div>

        <div className="flex justify-between">
          <span>SVM</span>
          <span className="font-bold">81.25%</span>
        </div>

        <div className="flex justify-between">
          <span>XGBoost</span>
          <span className="font-bold">81.25%</span>
        </div>
      </div>
    </div>
  );
}
