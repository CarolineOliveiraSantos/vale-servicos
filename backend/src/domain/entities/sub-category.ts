
import { Category } from './category'
import { Image } from './image'

export interface SubCategoryProps {
  id: string
  name: string
  image: Image
  category?: Category
}
export class SubCategory {
  private props: SubCategoryProps
  constructor(props : SubCategoryProps) {
    this.props = props

  }

  public get id() {
    return this.props.id
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get category() {
    return this.props.category
  }

  public set category(category: Category | undefined) {
    this.props.category = category
  }

  public get image() {
    return this.props.image
  }

  public set image(image: Image) {
    this.props.image = image
  }
}
