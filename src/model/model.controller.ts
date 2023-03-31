import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Model, ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get('/all/:userId')
  findByUserName(@Param('userId') userId: string): Model[] {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string): Model {
    return this.modelService.findOne(+id);
  }
}
