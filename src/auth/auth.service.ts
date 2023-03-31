import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/auth/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  public async register(createUserDto: CreateUserDto): Promise<User | null> {
    const found = await this.dataSource.manager.findOne(User, {
      where: {
        name: createUserDto.name,
      },
    });

    if (!!found) {
      return null;
    } else {
      const user = new User();
      user.name = createUserDto.name;
      const created = await this.dataSource.manager.save(user);
      return created;
    }
  }

  public async login(name: string): Promise<User | null> {
    const found = await this.dataSource.manager.findOne(User, {
      where: {
        name: name,
      },
    });

    if (!!found) {
      return found;
    } else {
      return null;
    }
  }
}
