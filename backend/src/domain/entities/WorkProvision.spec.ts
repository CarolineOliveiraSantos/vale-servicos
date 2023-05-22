import { makeWorkProvision } from '../../../test/factories/makeWorkProvision';
import { WorkProvision } from './WorkProvision';

describe('WorkProvision', () => {
  it('should be able create WorkProvision', () => {
    expect(makeWorkProvision()).toBeInstanceOf(WorkProvision);
  });
});
