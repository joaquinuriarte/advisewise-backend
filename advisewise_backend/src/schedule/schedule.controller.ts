import { Controller, Get, Param} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Course } from './course.entity';
import { Semester } from './semester.entity';
import { Semester_Courses } from './semester_courses.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('all')
  async getAllCourses(): Promise<Course[]> {
    return this.scheduleService.getAllTitles();
  }

  @Get(':id')
  async getSemestersForFourYearPlan(@Param() params: any): Promise<Semester[]> {
    return this.scheduleService.getSemestersForFourYearPlan(params.id);
  }

  @Get('/semester/:id')
  async getCoursesForSemester(@Param() params: any): Promise<Semester_Courses[]> {
    return this.scheduleService.getCoursesForSemester(params.id);
  }
  
}
