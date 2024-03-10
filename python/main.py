from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
import os

app = FastAPI()

# Setze ein Standard-Log-Level, falls die Umgebungsvariable nicht gesetzt ist
log_level = os.getenv("LOG_LEVEL", "INFO").upper()

# Prüfe, ob das angegebene Log-Level gültig ist, ansonsten verwende INFO als Standard
if log_level not in ["INFO", "DEBUG", "ERROR", "FATAL"]:
    log_level = "INFO"

# Konfiguriere das Logging
logging.basicConfig(level=log_level)

# Erlaube CORS für das Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Ursprung deines Frontends
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/info")
def info_endpoint():
    logging.info("This is an info message")
    return {"message": "Info message logged"}

@app.get("/debug")
def debug_endpoint():
    logging.debug("This is a debug message")
    return {"message": "Debug message logged"}

@app.get("/error")
def error_endpoint():
    logging.error("This is an error message")
    return {"message": "Error message logged"}

@app.get("/fatal")
def fatal_endpoint():
    logging.fatal("This is a fatal message")
    return {"message": "Fatal message logged"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
