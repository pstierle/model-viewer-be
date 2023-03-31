export interface Model {
    id: number;
    name: string;
    url: string;
}
export declare class ModelService {
    private readonly models;
    findAll(): Model[];
    findOne(id: number): Model;
}
