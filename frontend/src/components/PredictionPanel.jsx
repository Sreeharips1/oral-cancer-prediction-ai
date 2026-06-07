import { useState } from "react";

export default function PredictionPanel({ onPredict }) {
  const [patient, setPatient] = useState("N1");

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Predict Patient</h2>

      <select
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
        className="w-full border p-3 rounded"
      >
        <option>H1</option>

        <option>H2</option>
        <option>H3</option>
        <option>H4</option>

        <option>C1</option>
        <option>C2</option>
        <option>C3</option>
        <option>C4</option>
      </select>

      <button
        onClick={() => onPredict(patient)}
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded"
      >
        Predict
      </button>
    </div>
  );
}
