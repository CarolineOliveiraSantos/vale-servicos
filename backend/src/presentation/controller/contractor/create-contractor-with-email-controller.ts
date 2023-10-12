import { CreateContractorWithEmailUseCase } from '@/domain/use-cases/contractor/create-contractor-with-email-use-case'
import { ResponseEntity } from '@/helpers/http/response-entity'
import { HttpRequest } from '@/interfaces/http/http-request'
import { HttpResponse } from '@/interfaces/http/http-response'
import { Controller } from '@/interfaces/presentation/controller/controller'
import { CreateContractorWithEmailDto } from '@/presentation/dtos/create-contractor-with-email.dto'
import { ExceptionFilter } from '@/presentation/errors/exception-filter'
import { ValidateDto } from '@/presentation/validator/ValidateDto'
export interface CreateContractorWithEmailControllerRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class CreateContractorWithEmailController implements Controller {
  constructor(
    private readonly createContractorWithEmailUseCase: CreateContractorWithEmailUseCase,
  ) {}

  async handle(
    request: HttpRequest<CreateContractorWithEmailControllerRequest, any, any>,
  ): Promise<HttpResponse<any>> {
    try {
      const createContractorWithEmail = new CreateContractorWithEmailDto({
        email: request.body.email,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        password: request.body.password,
      })
      await ValidateDto.isValid(createContractorWithEmail)
      const contractor = await this.createContractorWithEmailUseCase.execute(
        createContractorWithEmail,
      )
      return ResponseEntity.ok(contractor)
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
