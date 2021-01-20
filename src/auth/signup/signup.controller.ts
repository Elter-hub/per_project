import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('/auth/signup')
export class RegisterController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  public async register(
    @Res() res,
    @Body() registerUserDto: SignupService,
  ): Promise<any> {
    try {
      await this.signupService.signup(registerUserDto);

      return res.status(HttpStatus.OK).json({
        message: 'User registration successfully!',
        status: 200,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: User not registration!',
        status: 400,
      });
    }
  }
}
