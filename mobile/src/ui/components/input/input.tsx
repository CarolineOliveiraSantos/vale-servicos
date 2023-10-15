import { useInput } from '@/ui/hooks/use-input'
import { useTheme } from '@/ui/hooks/use-theme'
import { type FC } from 'react'

import { TextInput, type TextInputProps } from '../shared/text-input'

export type InputProps = TextInputProps
export const Input: FC<InputProps> = ({ onFocus, onBlur, ...props }) => {
  const { changeToFocus, changeWithoutFocus } = useInput()
  const { colors } = useTheme()

  return (
    <TextInput
      color="text-primary"
      placeholderTextColor={colors['input-placeholder']}
      flex={1}
      onFocus={(e) => {
        changeToFocus()
        if (onFocus) {
          onFocus(e)
        }
      }}
      onBlur={(e) => {
        changeWithoutFocus()
        if (onBlur) {
          onBlur(e)
        }
      }}
      {...props}
    />
  )
}
