import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  // Param,
  // ParseIntPipe,
  // ParseUUIDPipe,
  // Req,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';
// import { ErrorREST } from './error';
// import { type } from 'os';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get()
  getAllSongs(): string {
    try {
      return this.appService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
  }

  @Get('/greeting')
  greeting(): string {
    try {
      return this.appService.getHello();
    } catch (err) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: err },
      );
    }
  }

  // @Get(':songName')
  // lookupSongBasedOnName(@Req() req: Request): string {
  //   try {
  //     return this.appService.lookupSongBasedOnName(req.params['songName']);
  //   } catch (e) {
  //     // throw new HttpException(
  //     //   'server error',
  //     //   HttpStatus.INTERNAL_SERVER_ERROR,
  //     //   { cause: e },
  //     // );
  //     throw new ErrorREST({
  //       status: 401,
  //       message: `Cannot find the song ${req.params['songName']}`,
  //     });
  //   }
  // }

  // // @Get('/id/:songID')
  // // lookupSongBasedOnID(
  // //   @Param(
  // //     'id',
  // //     new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  // //   )
  // //   id: string,
  // // ): string {
  // //   try {
  // //     // return this.appService.lookupSongBasedOnID(req.params['songID']);
  // //     console.log(typeof id);
  // //     return this.appService.lookupSongBasedOnID(id);
  // //   } catch (e) {
  // //     throw new HttpException(
  // //       'server error',
  // //       HttpStatus.INTERNAL_SERVER_ERROR,
  // //       { cause: e },
  // //     );
  // //   }
  // // }
  // @Get('/id/:songID')
  // lookupSongBasedOnID(@Req() req: Request): string {
  //   try {
  //     return this.appService.lookupSongBasedOnID(
  //       parseInt(req.params['songID']),
  //     );
  //   } catch (e) {
  //     throw new ErrorREST({
  //       status: 401,
  //       message: `Cannot find the song with id ${req.params['songID']}`,
  //     });
  //   }
  // }
}
