import { fireEvent, render } from '@/jest/test-utils'
import { ButtonSecondary } from '@/ui/pages/Dashboard/components/ButtonSecondary'
import { faker } from '@faker-js/faker'
let title = faker.lorem.text()
let onPress = jest.fn()

describe('<ButtonSecondary />', () => {
  beforeEach(() => {
    title = faker.lorem.text()
    onPress = jest.fn()
  })
  it('should show correct title', async () => {
    const { getByText } = render(
      <ButtonSecondary title={title} onPress={onPress} />,
    )
    expect(getByText(title)).toBeTruthy()
  })

  it('should run onPress on ButtonSecondary press', async () => {
    const { getByTestId } = render(
      <ButtonSecondary title="any_title" onPress={onPress} />,
    )
    fireEvent.press(getByTestId('buttonSecondary'))
    expect(onPress).toHaveBeenCalled()
  })
  it('should render with props', async () => {
    const accessibilityHint = faker.lorem.text()
    const { getAllByA11yHint } = render(
      <ButtonSecondary
        onPress={onPress}
        title={title}
        accessibilityHint={accessibilityHint}
      />,
    )
    expect(getAllByA11yHint(accessibilityHint)).toBeTruthy()
  })
  it('should disable ButtonSecondary if isLoading', async () => {
    const { getByTestId } = render(
      <ButtonSecondary title={title} onPress={onPress} isLoading={true} />,
    )
    expect(getByTestId('buttonSecondary')).toBeDisabled()
  })
  it('should show ActivityIndicator if isLoading', async () => {
    const { getByTestId } = render(
      <ButtonSecondary title={title} onPress={onPress} isLoading={true} />,
    )
    expect(getByTestId('activity-indicator')).toBeTruthy()
  })
  describe('accessibility', () => {
    it('should render with role ButtonSecondary', () => {
      const { getByRole } = render(
        <ButtonSecondary onPress={onPress} title={title} />,
      )
      expect(getByRole('button')).toBeTruthy()
    })
  })
})
