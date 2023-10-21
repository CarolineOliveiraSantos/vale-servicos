export interface GoogleAccount {
  id: string
  given_name: string
  family_name: string
  email: string
  picture: string
}
export interface GoogleAuthentication {
  loadUser: (accessToken: string) => Promise<GoogleAccount>
}
