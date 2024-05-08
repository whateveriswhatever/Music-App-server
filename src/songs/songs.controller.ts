import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Inject,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/erect-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller({
  path: 'song',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION') private connection: Connection,
  ) {
    console.log(this.connection.CONNECTION_STRING);
  }
  @Get()
  findAll() {
    // return 'Find all songs';
    // return this.songsService.findAll();
    try {
      return this.songsService.findAll();
    } catch (err) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN, {
        cause: err,
      });
    }
  }

  @Get(':id')
  findById() {
    return `Looking for the song with id`;
  }

  @Post()
  create(@Body() newSong: CreateSongDTO) {
    console.log(`Created a new song !!!`);
    return this.songsService.create(newSong);
  }

  @Put(':id')
  update() {
    return `Update the song based on id `;
  }

  @Delete(':id')
  delete() {
    return `Deleted the song that wields id`;
  }
}
