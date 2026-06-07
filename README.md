OralGuard AI - Oral Cancer Prediction Using Gene Expression Data
Overview

OralGuard AI is a machine learning-based web application that predicts Oral Squamous Cell Carcinoma (OSCC) using gene expression data.

The project uses gene-expression profiles from the GSE37991 dataset and applies machine learning techniques to classify samples as:

Healthy
Oral Cancer

The trained model is deployed through a Flask backend and React frontend.

Features
Gene expression-based oral cancer prediction
Random Forest, SVM, and XGBoost model evaluation
81.25% prediction accuracy
Feature selection from 24,526 genes to 500 important genes
Interactive React dashboard
Flask REST API backend
Jupyter notebooks for analysis and visualization
Dataset

Dataset: GSE37991

Samples:

40 Healthy
40 Oral Cancer

Total Samples: 80

Original Features: 24,526 genes

Selected Features: 500 genes

Machine Learning Workflow

Dataset Collection
↓
Data Analysis
↓
Feature Selection
↓
Model Training
↓
Model Evaluation
↓
Model Comparison
↓
Feature Importance Analysis
↓
Flask API Deployment
↓
React Dashboard

Technologies Used

Frontend:

React
Vite
Axios

Backend:

Flask
Flask-CORS

Machine Learning:

Scikit-Learn
Random Forest
SVM
XGBoost
Pandas
NumPy

Visualization:

Matplotlib
Jupyter Notebook
Project Structure

backend/

Flask API
Trained Model
Prediction Logic

frontend/

React Dashboard
API Integration

dataset/

Processed Dataset Files

notebooks/

Data Analysis
Feature Selection
Model Training
Model Comparison
Feature Importance
Installation
Backend

cd backend

pip install -r requirements.txt

flask
flask-cors
pandas
numpy
scikit-learn
joblib
xgboost
gunicorn

python app.py

Backend runs at:

http://localhost:5000

Frontend

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:5173

Model Performance

Random Forest Accuracy: 81.25%

Additional Evaluation:

Confusion Matrix
ROC Curve
PCA Visualization
Feature Importance Analysis
Future Improvements
Real patient gene-expression file upload
Explainable AI (SHAP)
User authentication
Cloud deployment
Docker containerization
Author

Sreehari P Shaiju

Electronics and Communication Engineering

Machine Learning and Full Stack Development Project
