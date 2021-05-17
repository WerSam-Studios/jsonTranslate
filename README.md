# JsonTranslate
## Tradutor de requisição de Json, tanto como API para acesso, como front-end.  

### API PYTHON TRANSLATE

O principal foco da criação dessa API em nosso projeto, primeiro é para entender um pouco do inicio do microservices. Segundo é conseguir utilizar de forma gratuita um serviço de tradução de frases, e com python nós conseguimos utilizando o pacote ```google_trans_new```. Ela não tem o proposito de traduzir e tratar os json isso será feito com NodeJS, ela apenas traduz frases para frase escolhida.
  
Exemplos de chamadas na api no end-point ```/translate/```:

Request: 
  - setence: A frase que irá ser mandada para api de tradução.
  - lang: O código da lingua que vai ser traduzida a frase. Você pode encontrar os códigos referentes a cada lingua clicando no [link](https://www.onehourtranslation.com/translation/developers/language-codes)
  
```JSON
{
"setence": "The UN, US and UK have called for more protection for the civilians caught in intense violence between Israel and Palestinian militants.",
"lang": "pt"
}
```  
Response:  
```JSON
{
 "response": "A ONU, EUA e Reino Unido pediram mais proteção para os civis capturados em intensa violência entre Israel e militantes palestinos."
}
```

Para rodar o projeto você primeiro tem que instalar as dependencias, em python são as seguintes :  
  
- FastAPI
- Uvicorn
- google_trans_new

Pode ser feito com o pip instalado em seu console utilizando como referência os exemplos a seguir:

```bash
  pip install fastapi
```

```bash
  pip install uvicorn[Standard]
```

```bash
  pip install google_trans_new
```

Para rodar a api do python é necessario que pela linha de comando você vá ate onde esteja o arquivo ```main.py```, e digite:

```bash
  uvicorn main:app --reload
```

*Ele por padrão roda na porta 8000 caso seu computador já esteja rodando algo nesta porta, você tem que mudar a referência a seu localhost na API do NodeJs em* [/jsonTranslate/api_python_translate/]
