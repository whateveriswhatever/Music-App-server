import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/erect-song-dto';

@Controller('song')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    // return 'Find all songs';
    return this.songsService.findAll();
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
