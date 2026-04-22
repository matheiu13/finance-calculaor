import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  sigin() {
    return 'I am sign in';
  }

  signup() {
    return 'I am sign up';
  }
}
