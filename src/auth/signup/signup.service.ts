import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { SignupUserDto } from './dto/signup.user.dto';
import { IUsers } from './../users/interfaces/users.interface';

@Injectable()
export class SignupService {
  constructor(private readonly usersService: UsersService) {}

  public async signup(registerUserDto: SignupUserDto): Promise<IUsers> {
    registerUserDto.password = await bcrypt.hash(registerUserDto.password, 10);

    return this.usersService.create(registerUserDto);
  }
}
