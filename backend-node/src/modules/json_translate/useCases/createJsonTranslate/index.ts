import { JsonRepository } from '../../repositories/implementations/JsonTranslateRepository';
import {CreateJsonTranslateController} from './CreateJsonTranslateController';
import {CreateJsonTranslateUseCase } from './CreateJsonTranslateUseCase';

const jsonTranslateRepository = JsonRepository.getInstance();
const createJsonTranslateUseCase = new CreateJsonTranslateUseCase(jsonTranslateRepository)
const createJsonTranslateController = new CreateJsonTranslateController(createJsonTranslateUseCase)

export { createJsonTranslateController }