import { User } from 'src/auth/entities/user.entity';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
export declare class Model {
    id: number;
    name: string;
    username: string;
    y: string;
    z: string;
    modelId: number;
    description: string;
    user: User;
    pointOfInterests: PointOfInterest[];
}
