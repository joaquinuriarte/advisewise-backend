import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('four_year_plans')
export class Four_year_plans {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_id: number;

  @Column()
  name: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @Column()
  official: boolean;
}