import { PointOfInterestService } from './point-of-interest.service';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
export declare class PointOfInterestController {
    private readonly pointOfInterestService;
    constructor(pointOfInterestService: PointOfInterestService);
    create(createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest>;
    findByModelId(modelId: string): Promise<PointOfInterest[]>;
}
