import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PointOfInterestService } from './point-of-interest.service';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterest } from 'src/point-of-interest/entities/point-of-interest.entity';

@Controller('point-of-interest')
export class PointOfInterestController {
  constructor(private readonly pointOfInterestService: PointOfInterestService) {}

  @Post()
  async create(
    @Body() createPointOfInterestDto: CreatePointOfInterestDto
  ): Promise<PointOfInterest> {
    const saved = await this.pointOfInterestService.create(createPointOfInterestDto);
    return saved;
  }

  @Get(':modelId')
  async findByModelId(@Param('modelId') modelId: string): Promise<PointOfInterest[]> {
    const found = await this.pointOfInterestService.findByModelId(modelId);
    return found;
  }
}
