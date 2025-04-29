import joblib
from sklearn.linear_model import LogisticRegression

# Treina um modelo simples (exemplo)
X = [[0, 0], [1, 1]]
y = [0, 1]
modelo = LogisticRegression()
modelo.fit(X, y)

# Salva o modelo no arquivo .pkl
joblib.dump(modelo, 'backend/models/pypipeline_modelo_final.pkl')

print("Modelo salvo com sucesso!")
