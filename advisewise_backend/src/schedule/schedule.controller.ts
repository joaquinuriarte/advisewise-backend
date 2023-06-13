import { Controller, Get, Param} from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get(':id')
  async getCourseTitle(@Param() params: any): Promise<string> {
    return this.scheduleService.getCourseTitle(params.id);
  }
  
}
