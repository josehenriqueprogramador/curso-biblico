import json

def get_aulas():
    with open("app/data/aulas.json", encoding="utf-8") as f:
        return json.load(f)

def get_aula(id):
    aulas = get_aulas()
    return next(a for a in aulas if a["id"] == id)
