import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('semesters')
export class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  four_year_plan_id: number;

  @Column()
  name: string;

  @Column()
  semester_number: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

}