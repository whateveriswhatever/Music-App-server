import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { dbConnection } from 'src/common/constants/connection';

// const mockSongsService = {
//   findAll() {
//     return [
//       {
//         id: 1,
//         title: 'Lasting Love',
//       },
//     ];
//   },
// };
@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: 'CONNECTION',
      useValue: dbConnection,
    },
  ],
})
export class SongsModule {}
