import {
  DomesticService,
  DomesticServiceProps
} from '../../src/domain/entities/DomesticService';
import { makeImage } from './makeImage';

export const makeDomesticService = (
  domesticService: Partial<DomesticServiceProps> = {}
) => {
  return new DomesticService({
    image: makeImage(),
    info: 'any_info',
    name: 'any_name',
    ...domesticService
  });
};
