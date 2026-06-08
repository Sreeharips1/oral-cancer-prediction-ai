import { useState } from "react";

export default function PredictionPanel({ onPredict }) {
  const [patient, setPatient] = useState("H1");

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Sample Prediction</h2>

        <p className="text-sm text-slate-500 mt-1">
          Select a sample from the dataset and run AI prediction.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Sample ID
        </label>

        <select
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <optgroup label="Healthy Samples">
            <option value="H1">Healthy Sample 01</option>
            <option value="H2">Healthy Sample 02</option>
            <option value="H3">Healthy Sample 03</option>
            <option value="H4">Healthy Sample 04</option>
          </optgroup>

          <optgroup label="Cancer Samples">
            <option value="C1">Cancer Sample 01</option>
            <option value="C2">Cancer Sample 02</option>
            <option value="C3">Cancer Sample 03</option>
            <option value="C4">Cancer Sample 04</option>
          </optgroup>
        </select>
      </div>

      <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-200">
        <p className="text-sm text-slate-500">Selected Sample</p>

        <p className="font-semibold text-slate-800 mt-1">{patient}</p>
      </div>

      <button
        onClick={() => onPredict(patient)}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-xl"
      >
        Run Prediction
      </button>
    </div>
  );
}
