import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { Semester } from './semester.entity';
import { Semester_Courses } from './semester_courses.entity';
import { Four_year_plans } from './four_year_plan.entity';

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
        @InjectRepository(Four_year_plans)
        private four_year_plansRepository: Repository<Four_year_plans>,
    ) {}

    async getAllTitles(): Promise<Course[]> {
        return this.courseRepository.find({
            select: ['id', 'class_name', 'number_of_credits']
        });
    }

    async getAllPlans(student_id: number): Promise<Four_year_plans[]> {
        return this.four_year_plansRepository.find({
            where: {
                student_id: student_id
            },
            select: ['id', 'name', 'official']
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

    async updateEntirePlanAdd(planData: any): Promise<any> {
        const { course_id, difficulty, semester_id } = planData;
    
        // Check if a record already exists for the given semester and course
        let semester_course = await this.semester_coursesRepository.findOne({
            where: {
                semester_id: semester_id,
                course_id: course_id
            }
        });
    
        if (semester_course) {
            // If the record exists, update the difficulty level
            semester_course.difficulty = difficulty;
    
            // Save the updated record
            return this.semester_coursesRepository.save(semester_course);
        } else {
            // If the record doesn't exist, create a new one
            const newSemesterCourse = this.semester_coursesRepository.create({
                semester_id: semester_id,
                course_id: course_id,
                difficulty: difficulty
            });
    
            // Save the new record
            return this.semester_coursesRepository.save(newSemesterCourse);
        }
    }  
    
    async updateEntirePlanRemove(planData: any): Promise<any> {
        const { course_id, semester_id } = planData;
    
        // Check if a record already exists for the given semester and course
        let semester_course = await this.semester_coursesRepository.findOne({
            where: {
                semester_id: semester_id,
                course_id: course_id
            }
        });
        if (!semester_course) {
            // If the record doesn't exist, ignore
            //TODO: Add logging that lets us know that flow is entering here. It shouldn't.
            return true;
        } else {
            // If the record does exist, delete it
            let deleted = this.semester_coursesRepository.delete({
                semester_id: semester_id,
                course_id: course_id
            });
            return true 
        }
    }
       
}
