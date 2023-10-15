import { fireEvent, render } from '@/jest/test-utils'
import { Button } from '@/ui/pages/authentication/pages/dashboard/components/button'
import { faker } from '@faker-js/faker'
import { View } from 'react-native'

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
  it('should show correct icon', async () => {
    const { getByTestId } = render(
      <Button
        icon={<View testID="icon" />}
        title="any_title"
        onPress={onPress}
      />,
    )
    expect(getByTestId('icon')).toBeTruthy()
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
    it('should render button with accessibilityHint if pass', () => {
      const accessibilityHint = faker.lorem.word()
      const { getByTestId } = render(
        <Button
          onPress={onPress}
          title={title}
          accessibilityHint={accessibilityHint}
        />,
      )
      expect(getByTestId('button')).toHaveProp('accessibilityHint')
    })
    it('should render button with accessibilityLabel if pass', () => {
      const accessibilityLabel = faker.lorem.word()
      const { getByTestId } = render(
        // eslint-disable-next-line react-native-a11y/has-accessibility-hint
        <Button
          onPress={onPress}
          title={title}
          accessibilityLabel={accessibilityLabel}
        />,
      )
      expect(getByTestId('button')).toHaveProp('accessibilityLabel')
    })
  })
})
