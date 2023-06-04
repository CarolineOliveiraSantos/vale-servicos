import { env } from '@/constants/env'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import * as Facebook from 'expo-auth-session/providers/facebook'
import * as WebBrowser from 'expo-web-browser'
import { createContext, FC, ReactNode, useEffect } from 'react'
import { Platform } from 'react-native'
export interface IAuthContext {
  promptGoogleSingIn: () => Promise<void>
  promptFacebookSingIn: () => Promise<void>
  promptAppleSingIn: () => Promise<void>
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext)
export interface IAuthProvider {
  children: ReactNode
}
WebBrowser.maybeCompleteAuthSession()

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  useEffect(() => {
    const CLIENT_ID =
      Platform.OS === 'ios'
        ? env.GOOGLE_CLIENT_ID_IOS
        : env.GOOGLE_CLIENT_ID_ANDROID

    GoogleSignin.configure({
      webClientId: CLIENT_ID,
      offlineAccess: true,
      iosClientId: env.GOOGLE_CLIENT_ID_IOS,
    })
  }, [])
  const promptGoogleSingIn = async () => {
    await GoogleSignin.hasPlayServices()
    await GoogleSignin.signIn()
  }
  return (
    <AuthContext.Provider
      value={{
        promptAppleSingIn: async () => {},
        promptFacebookSingIn: async () => {},
        promptGoogleSingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
