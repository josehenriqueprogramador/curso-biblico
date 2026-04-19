from fastapi import APIRouter
from fastapi.responses import FileResponse
from app.services.aula_service import get_aulas, get_aula

router = APIRouter(prefix="/aulas")

@router.get("/")
def listar():
    return get_aulas()

@router.get("/{id}")
def detalhe(id: int):
    return get_aula(id)

@router.get("/download/{id}")
def download(id: int):
    aula = get_aula(id)
    path = f"/tmp/aula_{id}.txt"

    with open(path, "w", encoding="utf-8") as f:
        f.write(f"{aula['titulo']}\n\n{aula['conteudo']}")

    return FileResponse(path, filename=f"aula_{id}.txt")
