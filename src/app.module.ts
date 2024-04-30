import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(`${consumer}`);
    consumer.apply(LoggerMiddleware);
    throw new Error('Method was implemented !!!');
  }
}
