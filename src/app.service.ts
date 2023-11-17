import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello jkk!';
  }
  getHi(): number {
    return 1;
  }
}
