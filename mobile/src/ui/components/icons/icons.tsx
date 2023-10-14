import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { AppleIcon } from './apple-icon'
import { ArrowLeft } from './arrow-left'
import { FacebookIcon } from './facebook-icon'
import { GoogleIcon } from './google-icon'
import { Lock } from './lock'
import { Mail } from './mail'
import { TwitterIcon } from './twitter-icon'

export interface IconProps {
  size?: number
  color: string
}
export const Icons = {
  eyeOff: ({ color, size = 24 }: IconProps) => (
    <Feather name="eye-off" size={size} color={color} />
  ),
  eye: ({ color, size = 24 }: IconProps) => (
    <Feather name="eye" size={size} color={color} />
  ),
  lock: ({ color, size = 24 }: IconProps) => (
    <Lock width={size} height={size} fill={color} />
  ),
  email: ({ color, size = 24 }: IconProps) => (
    <Mail width={size} height={size} fill={color} />
  ),
  arrowRight: ({ color, size = 24 }: IconProps) => (
    <Feather name="arrow-right" color={color} size={size} />
  ),
  arrowLeft: ({ color, size = 24 }: IconProps) => (
    <ArrowLeft fill={color} width={size} height={size} />
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
  apple: ({ size = 24, color }: IconProps) => (
    <AppleIcon height={size} width={size} color={color} fill={color} />
  ),
  twitter: ({ size = 24 }: Pick<IconProps, 'size'>) => (
    <TwitterIcon height={size} width={size} />
  ),
}
