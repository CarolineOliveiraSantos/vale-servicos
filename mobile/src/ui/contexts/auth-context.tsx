import { env } from '@/constants/env'
import { ContractorModel } from '@/domain/models/ContractorModel'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { LoginManager, Profile } from 'react-native-fbsdk-next'
export interface AuthContextProps {
  promptGoogleSingIn: () => Promise<void>
  promptFacebookSingIn: () => Promise<void>
}
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)
export interface AuthProviderProps {
  children: ReactNode
}
export interface UserDto {}
const GOOGLE_CLIENT_ID =
  Platform.OS === 'ios'
    ? env.GOOGLE_CLIENT_ID_IOS
    : env.GOOGLE_CLIENT_ID_ANDROID
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [Contractor, setContractor] = useState<ContractorModel | null>(null)

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: GOOGLE_CLIENT_ID,
      iosClientId: env.GOOGLE_CLIENT_ID_IOS,
    })
  }, [])
  const promptGoogleSingIn = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    await GoogleSignin.signIn()
  }
  const promptFacebookSingIn = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile'])
    if (result.grantedPermissions) {
      const profile = await Profile.getCurrentProfile()
      console.log(profile)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        promptFacebookSingIn,
        promptGoogleSingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
