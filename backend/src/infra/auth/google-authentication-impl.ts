import {
  GoogleAccount,
  GoogleAuthentication,
} from '@/interfaces/auth/google-authentication'
import { HttpService } from '@/interfaces/http/http-service'
import { UnauthorizedException } from '@/utils/http/exceptions/unauthorized-exception'
export interface GoogleResponseAccount {
  email: string
  email_verified: string
  name: string
  picture: string
  given_name: string
  family_name: string
  id: string
}
export class GoogleAuthenticationImpl implements GoogleAuthentication {
  constructor(private readonly httpService: HttpService) {}

  async loadUser(accessToken: string): Promise<GoogleAccount> {
    try {
      const { data } = await this.httpService.get<GoogleResponseAccount>(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return {
        email: data.email,
        family_name: data.family_name,
        given_name: data.given_name,
        id: data.id,
        picture: data.picture,
      }
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
