import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Course } from './schedule/course.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule,
    TypeOrmModule.forRoot({ // TODO: .env file should be kept locally in .gitignore and an example .env committed to repo.
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Course],
      synchronize: true, // TODO: it will change database to match schema in nestJS entity -> set to false in production
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}