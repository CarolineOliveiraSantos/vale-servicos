import {
  SubCategory,
  SubCategoryProps,
} from '@/domain/entities/sub-category'
import { makeCategory } from './make-category'
import { makeImage } from './make-image'
import { faker } from '@faker-js/faker'

export const makeSubCategory = (
  subCategory: Partial<SubCategoryProps> = {},
) => {
  return new SubCategory({
    id: faker.string.uuid(),
    image: makeImage(),
    name: 'any_name',
    category: makeCategory(),
    ...subCategory,
  })
}
