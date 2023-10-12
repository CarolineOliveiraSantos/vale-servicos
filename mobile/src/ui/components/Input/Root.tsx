import { InputProvider } from '@/ui/contexts/input-context'
import { useInput } from '@/ui/hooks/use-input'
import { FC } from 'react'

import { Box } from '../shared/Box'
import { Text } from '../shared/Text'
import { ViewProps } from '../shared/View'
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
      <Box
        backgroundColor="input-background"
        paddingHorizontal="sm"
        borderRadius="rounded-lg"
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
