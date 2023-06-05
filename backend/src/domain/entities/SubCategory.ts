import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'
import { Category } from './Category'
import { Image } from './Image'

export interface SubCategoryProps {
  id: string
  name: string
  image: Image
  category?: Category
}
export class SubCategory {
  private props: SubCategoryProps
  constructor({ id, ...props }: Replace<SubCategoryProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props,
    }
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
