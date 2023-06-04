import { makeWorker } from '../../../test/factories/makeWorker'
import { Worker } from './Worker'

describe('Worker', () => {
  it('should be able create Worker', () => {
    expect(makeWorker()).toBeInstanceOf(Worker)
  })
})
