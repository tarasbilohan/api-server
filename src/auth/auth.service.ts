import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.usersService.findOneByEmail(email);

    if (user === null) {
      return null;
    }

    const isCompared = await bcrypt.compare(password, user.password);
    if (!isCompared) {
      return null;
    }

    return user;
  }

  async login(user: UserEntity) {
    return {
      accessToken: this.jwtService.sign({ sub: user.id }),
    };
  }
}
