import {
  FacebookAccount,
  FacebookAuthentication,
} from '@/interfaces/auth/facebook-authentication'
import { HttpService } from '@/interfaces/http/http-service'
import { UnauthorizedException } from '@/utils/http/exceptions/unauthorized-exception'
export interface AppToken {
  access_token: string
  token_type: string
}
export interface DebugToken {
  data: {
    user_id: string
  }
}
export interface Picture {
  data: {
    height: number
    is_silhouette: boolean
    url: string
    width: number
  }
}
export interface UserInfo {
  id: string
  first_name: string
  last_name: string
  email: string
  picture: Picture
}

export class FacebookAuthenticationImpl implements FacebookAuthentication {
  private BASE_URL = 'https://graph.facebook.com/'
  constructor(
    private readonly httpService: HttpService,
    private readonly clientSecret: string,
    private readonly clientId: string,
  ) {}

  async loadUser(accessToken: string): Promise<FacebookAccount> {
    try {
      const facebookAccount = await this.getUserInfo(accessToken)
      return {
        firstName: facebookAccount.first_name,
        email: facebookAccount.email,
        id: facebookAccount.id,
        lastName: facebookAccount.last_name,
        picture: facebookAccount.picture.data.url,
      }
    } catch (error) {
      throw new UnauthorizedException()
    }
  }

  private async getAppToken(): Promise<AppToken> {
    const { data } = await this.httpService.get<AppToken>(
      new URL('/oauth/access_token', this.BASE_URL).toString(),
      {
        params: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials',
        },
      },
    )
    return data
  }

  private async getDebugToken(clientToken: string): Promise<DebugToken> {
    const appToken = await this.getAppToken()
    const { data } = await this.httpService.get(
      new URL('/debug_token', this.BASE_URL).toString(),
      {
        params: {
          access_token: appToken.access_token,
          input_token: clientToken,
        },
      },
    )
    return data
  }

  private async getUserInfo(clientToken: string): Promise<UserInfo> {
    const debugToken = await this.getDebugToken(clientToken)
    const { data } = await this.httpService.get(
      new URL(`/${debugToken.data.user_id}`, this.BASE_URL).toString(),
      {
        params: {
          fields: ['id', 'first_name', 'last_name', 'picture', 'email'].join(
            ',',
          ),
          access_token: clientToken,
        },
      },
    )
    return data
  }
}
