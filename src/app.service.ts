import { Injectable, Inject } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

// storage = ['Habits', 'Just the way you are'];

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}

  getHello(): string {
    return `Hello I'm learning Nest.js fundamental. ${this.devConfigService.getDBHost()} at PORT : ${this.config.port}`;
  }

  findAll(): string {
    return `Fetched all songs`;
  }

  lookupSongBasedOnName(name: string): string {
    return `Looking up the song name ${name}`;
  }

  lookupSongBasedOnID(id: number): string {
    // console.log(typeof id);
    id = Number(id);
    // console.log(`Type of id after being parsed int : ${typeof id}`);
    // console.log(Number(id));
    // return `Looking up the song with the id : ${id}`;
    if (!Number(id)) {
      return `Invalid id !!!`;
    } else {
      return `Looking up the song with the id : ${id}`;
    }
  }
}
