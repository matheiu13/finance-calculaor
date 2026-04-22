/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  sigin() {
    return 'I am sign in';
  }

  signup() {
    return 'I am sign up';
  }

  login(user: any) {
    const payload = {
      email: user.email,
      sub: user.email,
      firstName: user.firstName,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
