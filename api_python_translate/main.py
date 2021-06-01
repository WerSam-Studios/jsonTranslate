from os import stat
from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from google_trans_new import google_translator  
import json

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
        response = {}
        json_text = setence.setence

        setence_dict = json.loads(json_text)
        response = translate_json(setence_dict,setence_dict,setence.lang)
        return str(response)
    except:
        raise HTTPException(status_code=501,detail="Error in translate setence")
    
def translate_word(value,lang):
    traducao = translator.translate(value,lang_tgt=lang)
    if type(traducao) is list:
        traducao = traducao[0]
    return traducao


def translate_json(value,json_aux,lang='pt'):
    if type(value) is not tuple and type(value) is not dict and type(value) is not list:
        index = translate_word(value,lang)
        return index
    elif type(value) is list or type(value) is tuple:
        for item in value:
            value[value.index(item)] = translate_json(item,json_aux)
        print(value)
    elif type(value) is dict:
        for k,v in value.items():
           value[k] = translate_json(v,value[k])
        json_aux = value
    return json_aux
