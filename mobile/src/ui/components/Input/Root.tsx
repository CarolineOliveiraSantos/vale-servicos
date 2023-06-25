import { InputProvider } from '@/contexts/InputContext'
import { useInput } from '@/hooks/useInput'
import { FC } from 'react'

import { Text } from '../shared/Text'
import { View, ViewProps } from '../shared/View'
export interface RootProps extends ViewProps {
  _focus?: ViewProps['style']
  errorMessage?: string
}
export const RootBase: FC<RootProps> = ({
  errorMessage,
  style,
  _focus,
  ...props
}) => {
  const { isFocus } = useInput()
  return (
    <>
      <View
        paddingHorizontal="sm"
        borderRadius="rounded-md"
        borderWidth={1}
        height={52}
        borderColor={errorMessage ? 'error' : 'input-border'}
        flexDirection="row"
        alignItems="center"
        gap="md"
        {...props}
        style={[style, isFocus ? _focus : {}]}
      />
      {errorMessage ? <Text variant="error">{errorMessage}</Text> : null}
    </>
  )
}
export const Root: FC<RootProps> = (props) => {
  return (
    <InputProvider>
      <RootBase {...props} />
    </InputProvider>
  )
}
