import { HttpStatus } from '@/helpers/http/http-status'
import {
  CreateContractorWithEmailController,
  type CreateContractorWithEmailControllerRequest,
} from '@/presentation/controller/contractor/create-contractor-with-email-controller'
import { type HttpRequest } from '@/presentation/protocols/http-request'
import { faker } from '@faker-js/faker'

import { CreateContractorWithEmailUseCaseSpy } from '../mocks/mock-contractor'
import { ValidationSpy } from '../mocks/mock-validation'

export const makeSut = () => {
  const validationSpy = new ValidationSpy()
  const createContractorWithEmailUseCaseSpy =
    new CreateContractorWithEmailUseCaseSpy()
  const sut = new CreateContractorWithEmailController(
    createContractorWithEmailUseCaseSpy,
    validationSpy,
  )
  return {
    sut,
    createContractorWithEmailUseCaseSpy,
    validationSpy,
  }
}
const makeRequest = (
  body: Partial<CreateContractorWithEmailControllerRequest> = {},
): HttpRequest<CreateContractorWithEmailControllerRequest, any, any> => {
  return {
    body: {
      lastName: faker.person.lastName(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      email: faker.internet.email(),
      ...body,
    },
    params: {},
    query: {},
  }
}
describe('CreateContractorWithEmailController', () => {
  it('should return 400 if email is not provided', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const res = await sut.handle(makeRequest({ email: undefined }))
    expect(res.statusCode).toBe(HttpStatus.BAD_REQUEST)
    expect(res.body).toBeTruthy()
  })
  it('should return 400 if lastName is not provided', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const res = await sut.handle(makeRequest({ lastName: undefined }))
    expect(res.statusCode).toBe(HttpStatus.BAD_REQUEST)
    expect(res.body).toBeTruthy()
  })
  it('should return 400 if firstName is not provided', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const res = await sut.handle(makeRequest({ firstName: undefined }))
    expect(res.statusCode).toBe(HttpStatus.BAD_REQUEST)
    expect(res.body).toBeTruthy()
  })
  it('should return 400 if password is not provided', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const res = await sut.handle(makeRequest({ password: undefined }))
    expect(res.statusCode).toBe(HttpStatus.BAD_REQUEST)
    expect(res.body).toBeTruthy()
  })
  it('should return 201 if success', async () => {
    const { sut } = makeSut()
    const res = await sut.handle(makeRequest())
    expect(res.statusCode).toBe(HttpStatus.OK)
    expect(res.body).toBeTruthy()
  })
})
