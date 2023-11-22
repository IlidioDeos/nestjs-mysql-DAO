import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { AuthorService } from './services/author.service';
import { AuthorController } from './controllers/author.controller';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { MusicController } from './controllers/music.controller';
import { MusicService } from './services/music.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, AuthorController, CategoryController, MusicController],
  providers: [AppService, UserService, AuthorService, CategoryService, MusicService],
})
export class AppModule {}
