import type { CreateContractorWithEmailUseCase } from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { exceptionHandler } from '@/presentation/errors/exception-handler'
import { badRequest, ok } from '@/presentation/helpers/http-helpers'
import type { Controller } from '@/presentation/protocols/controller'
import type { HttpRequest } from '@/presentation/protocols/http-request'
import type { HttpResponse } from '@/presentation/protocols/http-response'
import type { Validation } from '@/presentation/protocols/validation'
export interface CreateContractorWithEmailControllerRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class CreateContractorWithEmailController implements Controller {
  constructor(
    private readonly createContractorWithEmailUseCase: CreateContractorWithEmailUseCase,
    private readonly validation: Validation,
  ) {}

  async handle(
    request: HttpRequest<CreateContractorWithEmailControllerRequest>,
  ): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const contractor = await this.createContractorWithEmailUseCase.execute(
        request.body,
      )
      return ok(contractor)
    } catch (error) {
      return exceptionHandler(error)
    }
  }
}
