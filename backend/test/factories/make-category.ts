import { Category, CategoryProps } from '../../src/app/entities/category'
import { makeImage } from './make-image'

export const makeCategory = (category: Partial<CategoryProps> = {}) => {
  return new Category({
    image: makeImage(),
    name: 'any_name',
    ...category,
  })
}
