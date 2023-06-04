import { Worker, WorkerProps } from '../../src/domain/entities/Worker'

export const makeWorker = (worker: Partial<WorkerProps> = {}) => {
  return new Worker({
    email: 'any_email',
    firstName: 'any_firstName',
    lastName: 'any_lastName',
    password: 'any_password',
    telephone: 'any_telephone',
    ...worker,
  })
}
