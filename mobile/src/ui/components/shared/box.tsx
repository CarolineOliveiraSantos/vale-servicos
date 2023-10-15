import { type Theme } from '@/ui/styles/theme'
import { createBox } from '@shopify/restyle'
import type React from 'react'
export const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>
