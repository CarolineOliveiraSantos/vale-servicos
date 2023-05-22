import { makeDomesticService } from '../../../test/factories/makeDomesticService';
import { DomesticService } from './DomesticService';

describe('Service', () => {
  it('should be able create DomesticService', () => {
    expect(makeDomesticService()).toBeInstanceOf(DomesticService);
  });
});
