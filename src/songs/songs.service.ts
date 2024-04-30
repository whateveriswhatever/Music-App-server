import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local database
  // local array

  private readonly songs = [];

  create(song: any) {
    // save the song into the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch all available songs inner the songs array
    return this.songs;
  }
}
