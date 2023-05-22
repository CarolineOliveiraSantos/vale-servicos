import { ForwardRefRenderFunction, forwardRef, memo } from 'react';
import { View as RNView } from 'react-native';

import { View, ViewProps } from './View';
export type HStackProps = ViewProps;
const HStackBase: ForwardRefRenderFunction<RNView, HStackProps> = (
  { style, ...props },
  ref,
) => {
  return (
    <View ref={ref} style={[{ flexDirection: 'row' }, style]} {...props} />
  );
};
export const HStack = memo(forwardRef(HStackBase));
