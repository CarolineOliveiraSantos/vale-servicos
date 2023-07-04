import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/replace'
import { Image } from './image'

export interface CategoryProps {
  id: string
  name: string
  image: Image
}
export class Category {
  private props: CategoryProps
  constructor({ id, ...props }: Replace<CategoryProps, { id?: string }>) {
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

  public get image() {
    return this.props.image
  }

  public set image(image: Image) {
    this.props.image = image
  }
}
