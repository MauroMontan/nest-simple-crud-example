import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cat } from 'src/cats/entities/cat.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Cat, (cat) => cat.owner, { cascade: true })
  cats: Cat[];
}
