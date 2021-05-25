import { Response, Request } from 'express';

import { CreateJsonTranslateUseCase } from './CreateJsonTranslateUseCase';

class CreateJsonTranslateController {
    constructor ( private createJsonTranslateUseCase : CreateJsonTranslateUseCase ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const {json_request} = request.body;
        console.log(request.body)
        
        let {session} = request.headers;
        
        if(Array.isArray(session))
            session = session[0]

        try {
            const json_translate = await this.createJsonTranslateUseCase.execute({json_request, session});
            console.log(json_translate)
            return response.status(201).json(json_translate);
        }catch(err){
            return response.status(400).json({error: err})
        }
    }
}

export { CreateJsonTranslateController}; 