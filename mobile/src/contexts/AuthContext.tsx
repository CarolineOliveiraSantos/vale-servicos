import { env } from '@/constants/env'
import { ContractorModel } from '@/domain/models/ContractorModel'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import * as Facebook from 'expo-auth-session/providers/facebook'
import * as WebBrowser from 'expo-web-browser'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { Platform } from 'react-native'
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
WebBrowser.maybeCompleteAuthSession()
export interface UserDto {}
const GOOGLE_CLIENT_ID =
  Platform.OS === 'ios'
    ? env.GOOGLE_CLIENT_ID_IOS
    : env.GOOGLE_CLIENT_ID_ANDROID
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [Contractor, setContractor] = useState<ContractorModel | null>(null)
  const [facebookRequest, facebookResponse, facebookPromptAsync] =
    Facebook.useAuthRequest({
      clientId: env.FACEBOOK_CLIENT_ID,
    })

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
    await facebookPromptAsync()
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
