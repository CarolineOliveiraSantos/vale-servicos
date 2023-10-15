import { env } from '@/constants/env'
import { type HttpClient } from '@/data/protocols/http/http-client'
import { type AuthDto } from '@/domain/dtos/AuthDto'
import { ContractorAlreadyExists } from '@/domain/errors/contractor-already-exists'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HttpStatusCode } from '@/domain/helpers/http/http-status-code'
import { ContractorModel } from '@/domain/models/ContractorModel'
import type {
  SignInWithEmailUseCase,
  SignInWithEmailUseCaseDto,
  SignInWithEmailUseCaseResponse,
} from '@/domain/use-cases/sign-in-with-email-use-case'

export class SingInWithEmailUseCaseImpl implements SignInWithEmailUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(
    body: SignInWithEmailUseCaseDto,
  ): Promise<SignInWithEmailUseCaseResponse> {
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
