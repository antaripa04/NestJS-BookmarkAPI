import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'I have singned in' };
  }

  signup() {
    return { msg: 'I have singned up' };
  }
}
