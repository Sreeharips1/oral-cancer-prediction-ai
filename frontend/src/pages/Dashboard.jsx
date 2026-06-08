import { useState } from "react";

import StatCard from "../components/StatCard";
import DatasetCard from "../components/DatasetCard";
import ModelCard from "../components/ModelCard";
import PredictionPanel from "../components/PredictionPanel";
import ResultCard from "../components/ResultCard";
import api from "../services/api";
import Fileupload from "../components/fileupload";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [fileoutput, setfileoutput] = useState(null);

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

  const handlepredictFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await api.post("/predict-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    setfileoutput({
      prediction: response.data.prediction,
      confidence: response.data.confidence,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            OralGuard AI
          </h1>

          <p className="text-slate-500 mt-2">
            AI-Powered Oral Cancer Detection and Screening Platform
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Samples" value="80" />
          <StatCard title="Healthy" value="40" />
          <StatCard title="Cancer" value="40" />
          <StatCard title="Accuracy" value="81.25%" />
        </div>

        {/* Dataset + Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DatasetCard />
          <ModelCard />
        </div>

        {/* Main Upload Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            File-Based Prediction
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Fileupload filepredict={handlepredictFile} />
            <ResultCard result={fileoutput} />
          </div>
        </div>

        {/* Sample Prediction */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Sample Prediction
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PredictionPanel onPredict={handlePredict} />
            <ResultCard result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
