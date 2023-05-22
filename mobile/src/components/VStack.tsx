import { ForwardRefRenderFunction, forwardRef, memo } from 'react';
import { View as RNView } from 'react-native';

import { View, ViewProps } from './View';
export type VStackProps = ViewProps;
const VStackBase: ForwardRefRenderFunction<RNView, VStackProps> = (
  { style, ...props },
  ref,
) => {
  return (
    <View
      ref={ref}
      style={[
        {
          flexDirection: 'column',
        },
        style,
      ]}
      {...props}
    />
  );
};
export const VStack = memo(forwardRef(VStackBase));
