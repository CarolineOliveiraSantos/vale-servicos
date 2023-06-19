import { Theme } from '@/styles/Theme'
import { createBox } from '@shopify/restyle'
import React from 'react'
export const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>