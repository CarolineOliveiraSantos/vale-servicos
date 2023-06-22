import { env } from '@/constants/env'
import { AuthDto } from '@/dtos/AuthDto'
import { ContractorAlreadyExists } from '@/errors/ContractorAlreadyExists'
import { UnexpectedError } from '@/errors/UnexpectedError'
import { HttpService } from '@/interfaces/HttpService'

import { HttpStatusCode } from '../helpers/http/HttpStatusCode'
import { ContractorModel } from '../models/ContractorModel'
export interface ServiceSingUpWithEmailBody {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface ServiceSingUpWithEmailResponse {
  contractor: ContractorModel
  accessToken: string
  refreshToken: string
}

export class ServiceSingUpWithEmail {
  constructor(private readonly httpService: HttpService) {}
  async singUp(
    body: ServiceSingUpWithEmailBody,
  ): Promise<ServiceSingUpWithEmailResponse> {
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
        break
      case HttpStatusCode.CONFLICT:
        throw new ContractorAlreadyExists()
        break
      default:
        throw new UnexpectedError()
        break
    }
  }
}
