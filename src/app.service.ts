import { Injectable } from "@nestjs/common";
import { DataRepository } from "./data.repository";
import { InjectRepository } from "@nestjs/typeorm";
import axios from 'axios'
import * as cheerio from 'cheerio'
import { ProductDto } from "./product.dto";
import { Data } from "./data.entity";

@Injectable()

export class AppService {
  constructor(
    @InjectRepository(DataRepository)
    private dataRepo: DataRepository
  ) {}

  async getHTML(url: string): Promise<any> {
    const { data } = await axios.get(url);

    return cheerio.load(data);
  }

  async parse() {
    const $ = await this.getHTML('https://www.olx.ua');
    let data: ProductDto;

    $('li.wrap.tleft.rel.fleft').each(async (i, element) => {
      const title = $(element).find('h4.normal').text().trim()
      const linkAddress = $(element).find('h4.normal a').attr('href')
      const address = $(element).find('ul.date-location li').first().text().trim()
      const price = $(element).find('div.price').first().text().trim()

      data = {
        title,
        linkAddress,
        address,
        price
      }

      const createdProduct = await this.dataRepo.createProduct(data)
    })

    return { message: 'saved'}
  }

  async getProducts(): Promise<Data[]> {
    return await this.dataRepo.find()
  }
}