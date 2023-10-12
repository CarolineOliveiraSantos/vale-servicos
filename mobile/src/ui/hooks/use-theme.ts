import { useTheme as useThemeRestyle } from '@shopify/restyle'
import { Theme } from 'src/ui/styles/theme'
export const useTheme = () => useThemeRestyle<Theme>()
