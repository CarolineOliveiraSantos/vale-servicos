export interface FacebookAccount {
  id: string
  firstName: string
  lastName: string
  email: string
  picture: string
}
export interface FacebookAuthentication {
  loadUser: (accessToken: string) => Promise<FacebookAccount>
}
