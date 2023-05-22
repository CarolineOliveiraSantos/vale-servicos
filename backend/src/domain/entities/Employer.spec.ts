import { makeEmployer } from '../../../test/factories/makeEmployer';
import { Employer } from './Employer';

describe('Employer', () => {
  it('should be able create Employer', () => {
    expect(makeEmployer()).toBeInstanceOf(Employer);
  });
});
