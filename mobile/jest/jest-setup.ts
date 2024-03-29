/* eslint-disable @typescript-eslint/no-var-requires */
import 'react-native-gesture-handler/jestSetup'
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})
jest.mock(
  'react-native-fbsdk-next',
  () => require('react-native-fbsdk-next/jest/mocks').default,
)

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
