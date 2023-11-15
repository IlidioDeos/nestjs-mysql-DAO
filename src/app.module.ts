import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MusicModule } from './music/music.module';
import { ConnectionDbModule } from './connection-db/connection-db.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { PlaylistModule } from './playlist/playlist.module';
import { ProducerModule } from './producer/producer.module';
import { connectionDBprovider } from './connection-db/connection-db.provider';

@Module({
  imports: [UserModule, MusicModule, ConnectionDbModule, AuthorModule, CategoryModule, PlaylistModule, ProducerModule],
  controllers: [AppController],
  providers: [AppService, connectionDBprovider],
})
export class AppModule {}
