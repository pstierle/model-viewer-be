import { Model, ModelService } from './model.service';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    findByUserName(userId: string): Model[];
    findOne(id: string): Model;
}
