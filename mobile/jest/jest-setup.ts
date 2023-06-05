import 'react-native-gesture-handler/jestSetup'
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})
jest.mock('@invertase/react-native-apple-authentication', () => {
  return {
    appleAuth: jest.fn(),
    appleAuthAndroid: jest.fn(),
  }
})

jest.mock('expo-auth-session/providers/facebook', () => ({
  useAuthRequest: () => {
    return [jest.fn(), jest.fn(), jest.fn()]
  },
}))
jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    hasPlayServices: jest.fn(),
    signIn: jest.fn(),
  },
}))
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
