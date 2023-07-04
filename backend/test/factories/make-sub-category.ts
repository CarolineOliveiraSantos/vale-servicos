import {
  SubCategory,
  SubCategoryProps,
} from '@/domain/entities/sub-category'
import { makeCategory } from './make-category'
import { makeImage } from './make-image'

export const makeSubCategory = (
  subCategory: Partial<SubCategoryProps> = {},
) => {
  return new SubCategory({
    image: makeImage(),
    name: 'any_name',
    category: makeCategory(),
    ...subCategory,
  })
}
