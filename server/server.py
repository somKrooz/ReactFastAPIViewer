from fastapi import FastAPI ,Query
from pydantic import BaseModel
from metaData import returnAnimeData
from metaData import Getlist
import uvicorn

app = FastAPI()


@app.get("/")
def home():
    return{"hello from the server.."}

@app.get("/anime")
def getAnimeData(title: str):
    return returnAnimeData(title)

@app.get("/list")
def getListData(lock: int = Query(..., description="type a lock Value")):
    return Getlist(lock)

if __name__ == "__main__":
    uvicorn.run("server:app", reload=True)