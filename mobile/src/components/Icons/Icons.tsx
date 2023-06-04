import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { AppleIcon } from './AppleIcon'
import { FacebookIcon } from './FacebookIcon'
import { GoogleIcon } from './GoogleIcon'
import { TwitterIcon } from './TwitterIcon'

export interface IconProps {
  size?: number
  color: string
}
export const Icons = {
  arrowRight: ({ color, size = 24 }: IconProps) => (
    <Feather name="arrow-right" color={color} size={size} />
  ),
  badgeAccountHorizontalOutline: ({ color, size = 24 }: IconProps) => (
    <MaterialCommunityIcons
      name="badge-account-horizontal-outline"
      color={color}
      size={size}
    />
  ),
  google: ({ size = 24 }: Pick<IconProps, 'size'>) => (
    <GoogleIcon height={size} width={size} />
  ),
  facebook: ({ size = 24 }: Pick<IconProps, 'size'>) => (
    <FacebookIcon height={size} width={size} />
  ),
  apple: ({ size = 24 }: Pick<IconProps, 'size'>) => (
    <AppleIcon height={size} width={size} />
  ),
  twitter: ({ size = 24 }: Pick<IconProps, 'size'>) => (
    <TwitterIcon height={size} width={size} />
  ),
}
