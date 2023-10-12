import { env } from '@/constants/env'
import { HttpClient } from '@/data/protocols/http/http-client'
import { AuthDto } from '@/domain/dtos/AuthDto'
import { ContractorAlreadyExists } from '@/domain/errors/ContractorAlreadyExists'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { HttpStatusCode } from '@/domain/helpers/http/HttpStatusCode'
import { ContractorModel } from '@/domain/models/ContractorModel'
import {
  SingUpWithEmailUseCase,
  SingUpWithEmailUseCaseDto,
  SingUpWithEmailUseCaseResponse,
} from '@/domain/use-cases/SingUpWithEmailUseCase'

export class SingUpWithEmailUseCaseImpl implements SingUpWithEmailUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(
    body: SingUpWithEmailUseCaseDto,
  ): Promise<SingUpWithEmailUseCaseResponse> {
    const { data, statusCode } = await this.httpClient.post<AuthDto>(
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
