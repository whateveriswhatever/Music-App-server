import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHOST = 'localhost';

  getDBHost() {
    return this.DBHOST;
  }
}

// @Injectable()
// export class AppService {
//   constructor(private devConfigService: DevConfigService) {}

//   getHello(): string {
//     return `Hi, I'm learning Nest.js fundamentals ${this.devConfigService.getDBHost()}`;
//   }
// }
