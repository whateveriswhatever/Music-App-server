import { Injectable } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';
import { Inject } from '@nestjs/common';
import { Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class SongsService {
  // local database
  // local array

  constructor(@Inject('CONNECTION') connection: Connection) {
    console.log(`Connection string : ${connection.CONNECTION_STRING}`);
  }

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
