import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('semester_courses')
export class Semester_Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester_id: number;

  @Column()
  course_id: number;

  @Column()
  difficulty: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

}