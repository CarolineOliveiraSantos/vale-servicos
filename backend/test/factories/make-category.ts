import { Category, CategoryProps } from '@/domain/entities/category'
import { makeImage } from './make-image'

export const makeCategory = (category: Partial<CategoryProps> = {}) => {
  return new Category({
    image: makeImage(),
    name: 'any_name',
    ...category,
  })
}
