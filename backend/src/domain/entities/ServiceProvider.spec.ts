import { makeServiceProvider } from '../../../test/factories/makeServiceProvider'
import { ServiceProvider } from './ServiceProvider'

describe('ServiceProvider', () => {
  it('should be able create ServiceProvider', () => {
    expect(makeServiceProvider()).toBeInstanceOf(ServiceProvider)
  })
})
