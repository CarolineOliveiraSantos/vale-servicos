import {
  SubCategory,
  SubCategoryProps,
} from '../../src/domain/entities/SubCategory'
import { makeCategory } from './makeCategory'
import { makeImage } from './makeImage'

export const makeSubCategory = (
  subCategory: Partial<SubCategoryProps> = {},
) => {
  return new SubCategory({
    image: makeImage(),
    name: 'any_name',
    category: makeCategory(),
    ...SubCategory,
  })
}
