import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/entity/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  public async register(createUserDto: CreateUserDto): Promise<User> {
    const found = await this.dataSource.manager.findOne(User, {
      where: {
        name: createUserDto.name,
      },
    });

    if (!!found) {
      throw new HttpException(
        'Username already exists!',
        HttpStatus.BAD_REQUEST
      );
    } else {
      const user = new User();
      user.name = createUserDto.name;
      user.models = [];
      const created = await this.dataSource.manager.save(user);
      return created;
    }
  }

  public async login(name: string): Promise<User> {
    const found = await this.dataSource.manager.findOne(User, {
      where: {
        name: name,
      },
    });

    if (!!found) {
      return found;
    } else {
      throw new HttpException(
        'User with this Name not found!',
        HttpStatus.NOT_FOUND
      );
    }
  }
}
