import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [ScheduleController],
    providers: [ScheduleService],
})
export class ScheduleModule {}
