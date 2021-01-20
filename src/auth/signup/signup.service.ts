import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignupUserDto } from './dto/signup.user.dto';
import { IUser } from '../../user/interfaces/user.interface';
import { UserService } from '../../user/user.service';

@Injectable()
export class SignupService {
  constructor(private readonly usersService: UserService) {}

  public async signup(registerUserDto: SignupUserDto): Promise<IUser> {
    registerUserDto.password = await bcrypt.hash(registerUserDto.password, 10);

    return this.usersService.create(registerUserDto);
  }
}
