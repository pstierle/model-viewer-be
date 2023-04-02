import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/entity/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }

  @Get('login/:name')
  public login(@Param('name') name: string): Promise<User> {
    return this.authService.login(name);
  }
}
