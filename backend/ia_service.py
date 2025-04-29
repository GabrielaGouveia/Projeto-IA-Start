#import httpx
from backend.services.model_service import predict

#URL_COLAB = '' #Link do colab que usaremos

def make_internal_prediction(data):
    return predict(data)


#async def chamar_ia(payload:dict):
#    async with httpx.AsyncClient() as client:
#  #      resposta= await client.post(URL_COLAB, json=payload)
#        return await resposta.json()