import { Theme } from '@/styles/theme'
import { useTheme as useThemeRestyle } from '@shopify/restyle'
export const useTheme = () => useThemeRestyle<Theme>()
