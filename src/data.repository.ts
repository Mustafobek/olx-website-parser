import { EntityRepository, Repository } from "typeorm";
import { Data } from "./data.entity";
import { ProductDto } from "./product.dto";

@EntityRepository(Data)

export class DataRepository extends Repository<Data> {
  async createProduct(dto: ProductDto): Promise<Data | string> {
    const { title, address, linkAddress, price } = dto

    const productExists = await this.findOne({ title })

    if(productExists) {
      return `${title} already exists in Database`
    }

    const product = new Data()
    product.title = title
    product.address = address
    product.linkAddress = linkAddress
    product.price = price

    await product.save()

    return product
  }
}