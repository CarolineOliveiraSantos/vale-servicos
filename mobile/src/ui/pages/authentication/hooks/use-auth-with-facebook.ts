import { useState } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'
export const useAuthWithFacebook = () => {
  const [isLoading, setIsLoading] = useState(false)

  const execute = async () => {
    try {
      setIsLoading(true)
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
        'openid',
      ])
      if (!result.isCancelled) {
        await AccessToken.getCurrentAccessToken()
      }
    } finally {
      setIsLoading(false)
    }
  }
  return { execute, isLoading }
}
