import { json } from 'express';
import { JsonTranslate } from '../../model/JsonTranslate';
import { IJsonsTranstaleRepository, ICreateJsonTranslateDTO } from '../IJsonTranslate';
import axios , {AxiosResponse} from 'axios'


interface ServerResponse {
    data: ServerData
}
  
interface ServerData {
    sentence: string
    lang: string
}

class JsonRepository  implements IJsonsTranstaleRepository{
    private jsonsTranslate: JsonTranslate[];

    private static INSTANCE: JsonRepository;

    
    private constructor(){
        this.jsonsTranslate = []
    }

    public static getInstance(): JsonRepository{
        if(!JsonRepository.INSTANCE)
            JsonRepository.INSTANCE = new JsonRepository();

        return JsonRepository.INSTANCE;
    }

    async create({json_request, session}: ICreateJsonTranslateDTO): Promise<JsonTranslate>{
        const new_json : JsonTranslate = new JsonTranslate();
        const json_response : string = await this.getTranslateJson(json_request);

        if(!session)
            Object.assign(new_json,{
                json_request,
                json_response
            })
        else
            Object.assign(new_json,{
                json_request,
                session,
                json_response
            })
        this.jsonsTranslate.push(new_json);

        return new_json;
    }

    findBySession(session: string) : (JsonTranslate | undefined)[] | undefined {

        const jsons = this.jsonsTranslate.map((json)=>{
                if(json.session == session)
                    return json;
            }
        )
        
        if(jsons.length == 0)
            return undefined;

        return jsons
    } 

    list(): JsonTranslate[]{
        return this.jsonsTranslate;
    }

    async getTranslateJson(json_request: string): Promise<string>{
        if(!json_request)
            return '';
  
        const url =  "127.0.0.1:8000/translate/"
        
        const json_request_python = {
            "setence": json_request,
            "lang" : "pt"
        }
        let response = await axios.post("http://127.0.0.1:8000/translate",json_request_python).then((response) => { console.log( response.data); return JSON.stringify(response.data)}).catch((err)=> console.log('teste'))
        
        if(!response)
            response = ''

        return response;
    }
}

export {JsonRepository}