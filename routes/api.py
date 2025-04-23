from fastapi import APIRouter, Request
from app.services.ia_service import chamar_ia

router= APIRouter()

@router.post('/processar/')
async def processardados(request: Request):
    dados= await requet.json()
    resposta_ia= await chamar_ia(dados)
    return{'resposta da IA': resposta_ia}