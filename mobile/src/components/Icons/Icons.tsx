import { ThemeSize } from '@/styles/ThemeSize';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { AppleIcon } from './AppleIcon';
import { FacebookIcon } from './FacebookIcon';
import { GoogleIcon } from './GoogleIcon';

export interface IconProps {
  size?: number;
  color: string;
}
export const Icons = {
  arrowRight: ({ color, size = ThemeSize[10] }: IconProps) => (
    <Feather name="arrow-right" color={color} size={size} />
  ),
  badgeAccountHorizontalOutline: ({
    color,
    size = ThemeSize[10],
  }: IconProps) => (
    <MaterialCommunityIcons
      name="badge-account-horizontal-outline"
      color={color}
      size={size}
    />
  ),
  google: ({ color, size = ThemeSize[10] }: IconProps) => (
    <GoogleIcon height={size} width={size} fill={color} />
  ),
  facebook: ({ color, size = ThemeSize[10] }: IconProps) => (
    <FacebookIcon height={size} width={size} color={color} />
  ),
  apple: ({ color, size = ThemeSize[10] }: IconProps) => (
    <AppleIcon height={size} width={size} fill={color} />
  ),
};
