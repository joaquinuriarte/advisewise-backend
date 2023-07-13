import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { Semester } from './semester.entity';
import { Semester_Courses } from './semester_courses.entity';

// Always use TypeORM's querying methods instead of raw SQL

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Semester)
        private semesterRepository: Repository<Semester>,
        @InjectRepository(Semester_Courses)
        private semester_coursesRepository: Repository<Semester_Courses>,
    ) {}

    async getAllTitles(): Promise<Course[]> {
        return this.courseRepository.find({
            select: ['id', 'class_name', 'number_of_credits']
        });
    }

    async getSemestersForFourYearPlan(id: number): Promise<Semester[]> {
        return this.semesterRepository.find({
            where: {
                four_year_plan_id: id
            }
        });
    }

    async getCoursesForSemester(id: number): Promise<Semester_Courses[]> {
        return this.semester_coursesRepository.find({
            where: {
                semester_id: id
            },
            select: ['course_id', 'difficulty']
        });
    }

    async updateEntirePlan(planData: any): Promise<any> {
        return true;
    }
}
