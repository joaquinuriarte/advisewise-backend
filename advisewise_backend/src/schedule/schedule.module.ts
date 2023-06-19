import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Semester } from './semester.entity';
import { Semester_Courses } from './semester_courses.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Course, Semester, Semester_Courses])],
    controllers: [ScheduleController],
    providers: [ScheduleService],
})
export class ScheduleModule {}
