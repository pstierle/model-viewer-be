import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { PointOfInterestService } from './point-of-interest.service';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterest } from 'src/entity/entities/point-of-interest.entity';
import { UpdatePointOfInterestDto } from './dto/update-point-of-interest.dto';

@Controller('point-of-interest')
export class PointOfInterestController {
  constructor(
    private readonly pointOfInterestService: PointOfInterestService
  ) {}

  @Post()
  public create(
    @Body() createPointOfInterestDto: CreatePointOfInterestDto
  ): Promise<PointOfInterest> {
    return this.pointOfInterestService.create(createPointOfInterestDto);
  }

  @Get(':modelId')
  public findByModelId(
    @Param('modelId') modelId: string
  ): Promise<PointOfInterest[]> {
    return this.pointOfInterestService.findByModelId(modelId);
  }

  @Put()
  public update(
    @Body() updatePointOfInterestDto: UpdatePointOfInterestDto
  ): Promise<PointOfInterest> {
    return this.pointOfInterestService.update(updatePointOfInterestDto);
  }

  @Delete('id')
  public async delete(@Param('id') id: string): Promise<HttpStatus> {
    await this.pointOfInterestService.delete(id);
    return HttpStatus.OK;
  }
}
