import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { AuthorService } from './services/author.service';
import { AuthorController } from './controllers/author.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, AuthorController],
  providers: [AppService, UserService, AuthorService],
})
export class AppModule {}
