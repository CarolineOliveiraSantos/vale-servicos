import { ServiceProvider } from './service-provider'
import { SubCategory } from './sub-category'

export interface ServiceProps {
  id: string
  price: number
  serviceProvider: ServiceProvider
  subCategory?: SubCategory
}
export class Service {
  private props: ServiceProps
  constructor(props: ServiceProps) {
    this.props = props
  }

  public get id() {
    return this.props.id
  }

  public get serviceProvider() {
    return this.props.serviceProvider
  }

  public set serviceProvider(serviceProvider: ServiceProvider) {
    this.props.serviceProvider = serviceProvider
  }

  public get subCategory() {
    return this.props.subCategory
  }

  public set subCategory(subCategory: SubCategory | undefined) {
    this.props.subCategory = subCategory
  }

  public get price() {
    return this.props.price
  }

  public set price(price: number) {
    this.props.price = price
  }
}
