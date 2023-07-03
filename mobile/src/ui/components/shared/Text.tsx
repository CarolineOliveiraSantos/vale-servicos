import { Theme } from 'src/ui/styles/theme'
import { createText } from '@shopify/restyle'
import React from 'react'
export const Text = createText<Theme>()
export type BoxProps = React.ComponentProps<typeof Text>