import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { IUsers } from './interfaces/user.interface';
import { UserService } from './user.service';

// @UseGuards(AuthGuard("jwt"))
@Controller('/api/user')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get('/:userId/profile')
  public async getUser(
    @Res() res,
    @Param('userId') userId: string,
  ): Promise<IUsers> {
    const user = await this.usersService.findById(userId);

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      user: user,
      status: 200,
    });
  }
}
