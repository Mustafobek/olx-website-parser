import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeormConfig } from "./config/typeorm.config";
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DataRepository } from "./data.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeormConfig),
    TypeOrmModule.forFeature([DataRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
