
import { Image } from './image'

export interface CategoryProps {
  id: string
  name: string
  image: Image
}
export class Category {
  private props: CategoryProps
  constructor(props : CategoryProps) {
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

  public get image() {
    return this.props.image
  }

  public set image(image: Image) {
    this.props.image = image
  }
}
