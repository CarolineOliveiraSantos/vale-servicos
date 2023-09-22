import { env } from '@/constants/env'
import * as Facebook from 'expo-auth-session/providers/facebook'
import { useState } from 'react'
export const useAuthWithFacebook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: env.FACEBOOK_CLIENT_ID,
  })
  const execute = async () => {
    try {
      setIsLoading(true)
      await promptAsync()
    } finally {
      setIsLoading(false)
    }
  }
  return { execute, isLoading }
}
