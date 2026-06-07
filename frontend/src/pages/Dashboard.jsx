import { useState } from "react";

import StatCard from "../components/StatCard";
import DatasetCard from "../components/DatasetCard";
import ModelCard from "../components/ModelCard";
import PredictionPanel from "../components/PredictionPanel";
import ResultCard from "../components/ResultCard";
import api from "../services/api";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  const handlePredict = async (patient) => {
    const response = await api.post("/predict-demo", {
      sampleId: patient,
    });

    console.log(response.data);

    setResult({
      patient,
      actual: response.data.actual,
      prediction: response.data.prediction,

      confidence: response.data.confidence,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-4xl font-bold mb-2">OralGuard AI</h1>

      <p className="text-gray-600 mb-8">
        AI Based Oral Cancer Prediction System
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard title="Samples" value="80" />
        <StatCard title="Healthy" value="40" />
        <StatCard title="Cancer" value="40" />
        <StatCard title="Accuracy" value="81.25%" />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <DatasetCard />
        <ModelCard />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <PredictionPanel onPredict={handlePredict} />

        <ResultCard result={result} />
      </div>
    </div>
  );
}
