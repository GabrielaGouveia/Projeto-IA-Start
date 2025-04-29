from fastapi import APIRouter
from pydantic import BaseModel
from backend.services.model_service import predict

router = APIRouter()

class PredictRequest(BaseModel):
    data:list


@router.get('/')
def home():
    return{'Mensagem': 'A API está funcionando!'}

@router.post('/predict')
def make_prediction(request:PredictRequest):   
    result = predict(data)
    return{'Previsão': result}
