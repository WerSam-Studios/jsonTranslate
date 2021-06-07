import { Response, Request } from 'express';

import { ListAllJsonTranslateUseCase } from './ListAllJsonTranslateUseCase';

class ListAllJsonTranslateController {
    constructor ( private listAllJsonTranslateUseCase : ListAllJsonTranslateUseCase ) {}

    handle(request: Request, response: Response): Response {
        let {session} = request.headers;
        
        if(Array.isArray(session))
            session = session[0]
            
        try {
            const json_translate = this.listAllJsonTranslateUseCase.execute({session});
            if(json_translate)
                return response.header("Access-Control-Allow-Origin", "*").status(200).json(json_translate);
            else return response.status(404).send();
        }catch(err){
            return response.status(400).json({error: err})
        }
    }
}

export { ListAllJsonTranslateController}; 