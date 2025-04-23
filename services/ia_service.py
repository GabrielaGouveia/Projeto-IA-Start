import httpx

URL_COLAB = '' #Link do colab que usaremos

async def chamar_ia(payload:dict):
    async with httpx.AsyncClient() as client:
        resposta= await client.post(URL_COLAB, json=payload)
        return resposta.json()