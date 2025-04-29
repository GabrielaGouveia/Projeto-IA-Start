import joblib

model_path = 'backend/models/pipeline_modelo_final_rf.pkl'
model = joblib.load(model_path)

def predict(data):
    
    prediction = model.predict([data])
    return prediction[0]