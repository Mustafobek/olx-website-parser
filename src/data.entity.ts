import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Data extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  title: string

  @Column()
  linkAddress: string

  @Column()
  address: string

  @Column()
  price: string
}