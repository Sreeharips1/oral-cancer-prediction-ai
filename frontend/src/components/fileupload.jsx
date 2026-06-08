import React, { useState } from "react";

const FileUpload = ({ filepredict }) => {
  const [file, setFile] = useState(null);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Upload Dataset</h2>

      <p className="text-gray-500 mb-4">Upload a CSV file for prediction</p>

      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-blue-500 transition"
      >
        <svg
          className="w-12 h-12 text-gray-400 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16V8m0 0l-3 3m3-3l3 3m7 5a2 2 0 002-2v-3a4 4 0 00-4-4h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0010.586 4H9a4 4 0 00-4 4v1"
          />
        </svg>

        <span className="font-medium">Click to upload</span>

        <span className="text-sm text-gray-500">CSV files only</span>

        <input
          id="file-upload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {file && (
        <div className="mt-4 p-3 bg-slate-100 rounded-lg">
          <p className="text-sm font-medium">Selected File</p>
          <p className="text-sm text-gray-600">{file.name}</p>
        </div>
      )}

      <button
        disabled={!file}
        onClick={() => filepredict(file)}
        className={`mt-4 w-full py-3 rounded-lg font-medium transition
          ${
            file
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        Predict
      </button>
    </div>
  );
};

export default FileUpload;
