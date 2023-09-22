import { FC } from 'react'

import {
  TouchableOpacity,
  TouchableOpacityProps,
} from './shared/TouchableOpacity'

export const RoundedIcon: FC<TouchableOpacityProps> = (props) => {
  return (
    <TouchableOpacity
      height={45}
      width={45}
      borderRadius="rounded-full"
      accessibilityRole="button"
      backgroundColor="button-go-back"
      justifyContent="center"
      alignItems="center"
      {...props}
    />
  )
}
