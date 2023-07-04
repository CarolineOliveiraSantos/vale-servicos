import { env } from '@/constants/env'
import { HttpStatusCode } from '@/domain/helpers/http/HttpStatusCode'
import { ContractorModel } from '@/domain/models/ContractorModel'
import { HttpService } from '@/interfaces/http/HttpService'
import {
  SingUpWithEmailUseCase,
  SingUpWithEmailUseCaseBody,
  SingUpWithEmailUseCaseResponse,
} from '@/interfaces/use-cases/SingUpWithEmailUseCase'
import { AuthDto } from '@/domain/dtos/AuthDto'
import { ContractorAlreadyExists } from '@/domain/errors/ContractorAlreadyExists'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'

export class SingUpWithEmailUseCaseImpl implements SingUpWithEmailUseCase {
  constructor(private readonly httpService: HttpService) { }

  async singUp(
    body: SingUpWithEmailUseCaseBody,
  ): Promise<SingUpWithEmailUseCaseResponse> {
    const { data, statusCode } = await this.httpService.post<AuthDto>(
      new URL('api/contractor/sing-up/email', env.BASE_URL).toString(),
      { body },
    )

    switch (statusCode) {
      case HttpStatusCode.CREATED:
        return {
          accessToken: data.accessToken,
          contractor: new ContractorModel(data.contractor),
          refreshToken: data.refreshToken,
        }
      case HttpStatusCode.CONFLICT:
        throw new ContractorAlreadyExists()
      default:
        throw new UnexpectedError()
    }
  }
}
