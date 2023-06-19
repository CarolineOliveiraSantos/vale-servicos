import { Theme } from '@react-navigation/native'
import { useTheme as useThemeRestyle } from '@shopify/restyle'
export const useTheme = () => useThemeRestyle<Theme>()
