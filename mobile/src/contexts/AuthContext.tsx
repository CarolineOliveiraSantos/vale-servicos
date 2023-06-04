import { env } from '@/constants/env'
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import * as Facebook from 'expo-auth-session/providers/facebook'
import { randomUUID } from 'expo-crypto'
import * as WebBrowser from 'expo-web-browser'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { Platform } from 'react-native'
import Toast from 'react-native-toast-message'
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
export interface UserDto {}
export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<UserDto | null>(null)
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: env.FACEBOOK_CLIENT_ID,
  })

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
    try {
      await GoogleSignin.hasPlayServices()
      await GoogleSignin.signIn()
    } catch {
      const toast = Toast.show({
        type: 'error',
        text1: 'Erro',
        position: 'bottom',
        visibilityTime: 10 * 100,
      })

      setTimeout(function hideToast() {
        Toast.hide(toast)
      }, 2000)
    }
  }
  const promptFacebookSingIn = async () => {
    await promptAsync()
  }

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      ;(async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,email,first_name,last_name,middle_name`,
        )
        await userInfoResponse.json()
      })()
    }
  }, [response])
  const promptAppleSingInIOS = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    })
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    )
    if (credentialState === appleAuth.State.AUTHORIZED) {
    }
  }
  const promptAppleSingInANDROID = async () => {
    const rawNonce = randomUUID()
    const state = randomUUID()
    appleAuthAndroid.configure({
      clientId: env.APPLE_CLIENT_ID,
      redirectUri: 'https://example.com/auth/callback',
      responseType: appleAuthAndroid.ResponseType.ALL,
      scope: appleAuthAndroid.Scope.ALL,
      nonce: rawNonce,
      state,
    })

    const response = await appleAuthAndroid.signIn()
  }
  return (
    <AuthContext.Provider
      value={{
        promptAppleSingIn:
          Platform.OS === 'ios'
            ? promptAppleSingInIOS
            : promptAppleSingInANDROID,
        promptFacebookSingIn,
        promptGoogleSingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
