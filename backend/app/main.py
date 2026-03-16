from fastapi import FastAPI

app = FastAPI(title="SMS Platform API")


@app.get("/health")
def health():
    return {"status": "ok"}