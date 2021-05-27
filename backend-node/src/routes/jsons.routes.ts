import {  Router } from 'express';

import { createJsonTranslateController } from '../modules/json_translate/useCases/createJsonTranslate'
import { listAllJsonTranslateController } from '../modules/json_translate/useCases/listAllJsonTranslate'

const jsonRoutes = Router();

jsonRoutes.get('/all',(request, response) => {
    listAllJsonTranslateController.handle(request, response);
})

jsonRoutes.post('/',(request,response) =>{
    createJsonTranslateController.handle(request,response);
})

export { jsonRoutes }