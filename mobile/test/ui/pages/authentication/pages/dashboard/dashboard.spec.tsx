import { render } from '@/jest/test-utils'
import {
  mockGoBack,
  mockNavigate,
} from '@/test/mocks/navigation/react-navigation-native-mock'
import { Dashboard } from '@/ui/pages/authentication/dashboard/dashboard'
describe('<Dashboard />', () => {
  beforeEach(() => {
    mockGoBack.mockClear()
    mockNavigate.mockClear()
  })
  it('should has button sign with google', async () => {
    const { getByTestId } = render(<Dashboard />)
    const button = getByTestId('button-sing-in-with-google')
    expect(button).toBeTruthy()
  })
  it('should has button sign with facebook', async () => {
    const { getByTestId } = render(<Dashboard />)
    const button = getByTestId('button-sing-in-with-facebook')
    expect(button).toBeTruthy()
  })
  describe('accessibility', () => {
    it('should has accessibilityHint in button sign in with google', async () => {
      const { getByTestId } = render(<Dashboard />)
      const button = getByTestId('button-sing-in-with-google')
      expect(button).toHaveProp('accessibilityHint')
    })

    it('should has accessibilityHint in button sign in with facebook', async () => {
      const { getByTestId } = render(<Dashboard />)
      const button = getByTestId('button-sing-in-with-facebook')
      expect(button).toHaveProp('accessibilityHint')
    })
  })
})
