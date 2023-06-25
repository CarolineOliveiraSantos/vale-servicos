import { fireEvent, render } from '@/jest/test-utils'
import { Button } from '@/ui/components/Button'
import { faker } from '@faker-js/faker'

let title = faker.lorem.text()
let onPress = jest.fn()
describe('<Button />', () => {
  beforeEach(() => {
    title = faker.lorem.text()
    onPress = jest.fn()
  })
  it('should show correct title', async () => {
    const { getByText } = render(<Button title={title} onPress={onPress} />)
    expect(getByText(title)).toBeTruthy()
  })

  it('should run onPress on Button press', async () => {
    const { findByTestId } = render(
      <Button title="any_title" onPress={onPress} />,
    )
    const button = await findByTestId('button')
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })
  it('should render with props', async () => {
    const accessibilityHint = faker.lorem.text()
    const { getAllByA11yHint } = render(
      <Button
        onPress={onPress}
        title={title}
        accessibilityHint={accessibilityHint}
      />,
    )
    expect(getAllByA11yHint(accessibilityHint)).toBeTruthy()
  })
  it('should disable button if isLoading', async () => {
    const { getByTestId } = render(
      <Button title={title} onPress={onPress} isLoading={true} />,
    )
    expect(getByTestId('button')).toBeDisabled()
  })
  it('should show ActivityIndicator if isLoading', async () => {
    const { getByTestId } = render(
      <Button title={title} onPress={onPress} isLoading={true} />,
    )
    expect(getByTestId('activity-indicator')).toBeTruthy()
  })
  describe('accessibility', () => {
    it('should render with role button', () => {
      const { getByRole } = render(<Button onPress={onPress} title={title} />)
      expect(getByRole('button')).toBeTruthy()
    })
  })
})
