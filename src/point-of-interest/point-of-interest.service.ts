import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';
import { DataSource } from 'typeorm';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';

@Injectable()
export class PointOfInterestService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  async create(createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest> {
    const pointOfInterest = new PointOfInterest();

    pointOfInterest.username = createPointOfInterestDto.username;
    pointOfInterest.description = createPointOfInterestDto.description;
    pointOfInterest.modelId = createPointOfInterestDto.modelId;
    pointOfInterest.x = createPointOfInterestDto.x;
    pointOfInterest.y = createPointOfInterestDto.y;
    pointOfInterest.z = createPointOfInterestDto.z;

    const saved = await this.dataSource.manager.save(pointOfInterest);
    return saved;
  }

  findByUsernameAndModel(name: string, id: number): Promise<PointOfInterest[]> {
    return this.dataSource.manager.find(PointOfInterest, {
      where: {
        username: name,
        modelId: id,
      },
    });
  }

  findOne(modelId: number): Promise<PointOfInterest> {
    return this.dataSource.manager.findOne(PointOfInterest, {
      where: {
        id: modelId,
      },
    });
  }
}
