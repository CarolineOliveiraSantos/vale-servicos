import { Category, CategoryProps } from '../../src/domain/entities/Category'
import { makeImage } from './makeImage'

export const makeCategory = (category: Partial<CategoryProps> = {}) => {
  return new Category({
    image: makeImage(),
    name: 'any_name',
    ...category,
  })
}
