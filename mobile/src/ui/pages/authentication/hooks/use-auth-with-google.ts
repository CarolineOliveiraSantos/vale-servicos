import { env } from '@/constants/env'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'
const GOOGLE_CLIENT_ID =
  Platform.OS === 'ios'
    ? env.GOOGLE_CLIENT_ID_IOS
    : env.GOOGLE_CLIENT_ID_ANDROID
export const useAuthWithGoogle = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: GOOGLE_CLIENT_ID,
      iosClientId: env.GOOGLE_CLIENT_ID_IOS,
    })
  }, [])
  const execute = async () => {
    try {
      setIsLoading(true)
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      await GoogleSignin.signIn()
    } finally {
      setIsLoading(false)
    }
  }
  return { execute, isLoading }
}
