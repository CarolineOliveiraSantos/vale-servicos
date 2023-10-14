import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const Mail = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 -960 960 960" {...props}>
    <Path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
  </Svg>
)
