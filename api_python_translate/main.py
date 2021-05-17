from os import stat
from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from google_trans_new import google_translator  

translator = google_translator()  

app = FastAPI()

class Setence(BaseModel):
    setence: str
    lang: str

@app.post("/translate/")
def read_item( setence: Setence):
    if setence.setence is None or setence.setence.split() == '':
        HTTPException(status_code=400,detail="Sentence doesn't pass on params!")
        
    try:
        response_translate = translator.translate(setence.setence,lang_tgt=setence.lang)
        if type(response_translate) is list:
            response_translate = response_translate[0]    
        response_translate = str(response_translate).strip()
        response = {'response': response_translate}
        return JSONResponse(response)
    except:
        raise HTTPException(status_code=501,detail="Error in translate setence")