import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
}