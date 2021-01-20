import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { UserService } from '../../user/user.service';
import { UserRepository } from '../../user/user.repository';

@Module({
  providers: [SignupService, UserService, UserRepository],
  controllers: [SignupController],
})
export class SignupModule {}
