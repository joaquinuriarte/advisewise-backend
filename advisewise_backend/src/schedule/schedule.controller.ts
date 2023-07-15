import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Course } from './course.entity';
import { Semester } from './semester.entity';
import { Semester_Courses } from './semester_courses.entity';
import { Four_year_plans } from './four_year_plan.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('updateEntirePlanAdd')
  async updateEntirePlanAdd(@Body() planData: any): Promise<any> {
    // `planData` will be an object containing the JSON data sent in the request body
    
    // This should call a service method that handles updating the plan, something like:
    return this.scheduleService.updateEntirePlanAdd(planData);
  }

  @Post('updateEntirePlanRemove')
  async updateEntirePlanRemove(@Body() planData: any): Promise<any> {
    // `planData` will be an object containing the JSON data sent in the request body
    
    // This should call a service method that handles updating the plan, something like:
    return this.scheduleService.updateEntirePlanRemove(planData);
  }

  @Get('allPlans/:student_id')
  async getAllPlans(@Param('student_id') student_id: number): Promise<Four_year_plans[]> {
    return this.scheduleService.getAllPlans(student_id);
  }

  @Get('allCourses')
  async getAllCourses(): Promise<Course[]> {
    return this.scheduleService.getAllTitles();
  }

  @Get(':id')
  async getSemestersForFourYearPlan(@Param() params: any): Promise<Semester[]> {
    return this.scheduleService.getSemestersForFourYearPlan(params.id);
  }

  @Get('semester/:id')
  async getCoursesForSemester(@Param() params: any): Promise<Semester_Courses[]> {
    return this.scheduleService.getCoursesForSemester(params.id);
  }
}
