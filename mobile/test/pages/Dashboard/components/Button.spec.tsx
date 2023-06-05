import { fireEvent, render } from '@/jest/test-utils'
import { Button } from '@/pages/Dashboard/components/Button'
import { View } from 'react-native'

describe('<Button />', () => {
  it('should show correct title', async () => {
    const title = 'any_title'
    const onPress = jest.fn()
    const { getByText } = render(<Button title={title} onPress={onPress} />)
    expect(getByText(title)).toBeTruthy()
  })
  it('should show correct icon', async () => {
    const onPress = jest.fn()
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
    const onPress = jest.fn()
    const { findByTestId } = render(
      <Button title="any_title" onPress={onPress} />,
    )
    const button = await findByTestId('button')
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })
})
