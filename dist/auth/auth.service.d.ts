import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/auth/entities/user.entity';
import { DataSource } from 'typeorm';
export declare class AuthService {
    private dataSource;
    constructor(dataSource: DataSource);
    register(createUserDto: CreateUserDto): Promise<User | null>;
    login(name: string): Promise<User | null>;
}
