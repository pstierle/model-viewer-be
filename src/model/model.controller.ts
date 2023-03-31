import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateModelDto } from 'src/model/dto/create-model.dto';
import { Model } from 'src/model/entities/model.entity';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get('/all/:userId')
  public findByUserName(@Param('userId') userId: string): Promise<Model[]> {
    return this.modelService.findByUserId(+userId);
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Model> {
    return this.modelService.findOne(+id);
  }

  @Post()
  public createModel(@Body() createModelDto: CreateModelDto) {
    return this.modelService.createOne(createModelDto);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../public/models',
      }),
    })
  )
  public uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'OK';
  }
}
