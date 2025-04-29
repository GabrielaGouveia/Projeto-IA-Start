from fastapi import FastAPI
from backend.routes.predict import router as predict_router

app = FastAPI()

#app.add_middleware(
#    CORSMiddleware,
#    allow_origins=['*'],
#    allow_credentials=True,
 #   allow_methods=['*'],
  #  allow_headers=['*'],
#)

app.include_router(predict_router)

#@app.get('/')
#def read_root():
#    return {'Mensagem': 'Funcionou'}