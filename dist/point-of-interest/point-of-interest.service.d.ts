import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { DataSource } from 'typeorm';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
export declare class PointOfInterestService {
    private dataSource;
    constructor(dataSource: DataSource);
    create(createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest>;
    findByUsernameAndModel(name: string, id: number): Promise<PointOfInterest[]>;
    findOne(modelId: number): Promise<PointOfInterest>;
}
