import { type Theme } from '@/ui/styles/theme'
import { createText } from '@shopify/restyle'
import type React from 'react'
export const Text = createText<Theme>()
export type BoxProps = React.ComponentProps<typeof Text>
