import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_name: string;

  @Column()
  number_of_credits: string;

}