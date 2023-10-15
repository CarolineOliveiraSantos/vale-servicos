import Svg, { type SvgProps, Path } from 'react-native-svg'
export const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 -960 960 960" {...props}>
    <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </Svg>
)
