import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('')

export class AppController {
  constructor(
    private appService: AppService
  ) {}

  @Get('')
  parse() {
    return this.appService.parse()
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts()
  }
}