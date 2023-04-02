import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Model } from 'src/entity/entities/model.entity';
import { CreateModelDto } from 'src/model/dto/create-model.dto';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get('/all/:userId')
  public findByUserId(@Param('userId') userId: string): Promise<Model[]> {
    return this.modelService.findByUserId(userId);
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Model> {
    return this.modelService.findOne(id);
  }

  @Post()
  public createModel(@Body() createModelDto: CreateModelDto) {
    return this.modelService.createOne(createModelDto);
  }

  @Delete('id')
  public async delete(@Param('id') id: string): Promise<HttpStatus> {
    await this.modelService.delete(id);
    return HttpStatus.OK;
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/models',
        filename: (req: any, file: any, cb: any) => {
          cb(null, file.originalname);
        },
      }),
    })
  )
  public uploadFile(@UploadedFile() file: Express.Multer.File) {
    return 'OK';
  }
}
