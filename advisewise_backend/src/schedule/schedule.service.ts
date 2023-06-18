import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
    ) {}

    async getCourseTitle(id: number): Promise<string> {
        const result = await this.courseRepository.query(`SELECT * FROM courses WHERE id = $1`, [id]);
        // const course = await this.courseRepository.findOne({
        //     where: {
        //         id: id                   // TODO: Understand why doesn't this work and fix
        //     }
        // // });
        // console.log(course)
        console.log(result)
        if (result[0] && result[0].class_name) {
            return `The title of this course is: ${result[0].class_name}, and it counts for ${result[0].number_of_credits} credits!`;
        } else {
            return 'Course not found';
        }
    }

    async getAllTitles(): Promise<string> {
        const result = await this.courseRepository.query(`SELECT id, class_name, number_of_credits FROM courses`); // Test
        return result
    }
}
