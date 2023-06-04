import {
  WorkProvision,
  WorkProvisionProps,
} from '../../src/domain/entities/WorkProvision'
import { makeImage } from './makeImage'
import { makeService } from './makeService'
import { makeWorker } from './makeWorker'

export const makeWorkProvision = (
  workProvision: Partial<WorkProvisionProps> = {},
) => {
  return new WorkProvision({
    description: 'any_description',
    image: makeImage(),
    service: makeService(),
    worker: makeWorker(),
    ...workProvision,
  })
}
