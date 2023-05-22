import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/styles/Theme';
import { ForwardRefRenderFunction, forwardRef, memo } from 'react';
import {
  FlexStyle,
  View as RNView,
  ViewProps as RNViewProps,
} from 'react-native';
export type ViewProps = RNViewProps & {
  backgroundColor?: keyof typeof Theme.colors.bg;
  height?: keyof typeof Theme.size;
  width?: keyof typeof Theme.size;
  flex?: number;
  paddingVertical?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  padding?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingBottom?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingEnd?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingHorizontal?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingLeft?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingRight?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingStart?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  paddingTop?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  margin?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginBottom?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginEnd?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginHorizontal?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginLeft?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginRight?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginStart?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginTop?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  marginVertical?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
  alignItems?: FlexStyle['alignItems'];
  alignContent?: FlexStyle['alignContent'];
  alignSelf?: FlexStyle['alignSelf'];
  justifyContent?: FlexStyle['justifyContent'];
  overflow?: FlexStyle['overflow'];
  borderRadius?: keyof Omit<typeof Theme.size, 'full' | 'auto'>;
};
const ViewBase: ForwardRefRenderFunction<RNView, ViewProps> = (
  {
    style,
    backgroundColor = 'primary',
    height = 'auto',
    width = 'auto',
    paddingVertical,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    alignContent,
    alignItems,
    alignSelf,
    flex,
    overflow,
    borderRadius,
    ...props
  },
  ref,
) => {
  const { colors, size } = useTheme();
  let background;
  if (Object.keys(colors.bg).includes(backgroundColor)) {
    background = colors.bg[backgroundColor as keyof typeof colors.bg];
  } else {
    background = backgroundColor;
  }

  return (
    <RNView
      ref={ref}
      style={[
        {
          overflow,
          alignContent,
          alignItems,
          alignSelf,
          flex,
          paddingVertical: paddingVertical ? size[paddingVertical] : undefined,
          padding: padding ? size[padding] : undefined,
          paddingBottom: paddingBottom ? size[paddingBottom] : undefined,
          paddingEnd: paddingEnd ? size[paddingEnd] : undefined,
          paddingHorizontal: paddingHorizontal
            ? size[paddingHorizontal]
            : undefined,
          paddingLeft: paddingLeft ? size[paddingLeft] : undefined,
          paddingRight: paddingRight ? size[paddingRight] : undefined,
          paddingStart: paddingStart ? size[paddingStart] : undefined,
          paddingTop: paddingTop ? size[paddingTop] : undefined,
          margin: margin ? size[margin] : undefined,
          marginBottom: marginBottom ? size[marginBottom] : undefined,
          marginEnd: marginEnd ? size[marginEnd] : undefined,
          marginHorizontal: marginHorizontal
            ? size[marginHorizontal]
            : undefined,
          marginLeft: marginLeft ? size[marginLeft] : undefined,
          marginRight: marginRight ? size[marginRight] : undefined,
          marginStart: marginStart ? size[marginStart] : undefined,
          marginTop: marginTop ? size[marginTop] : undefined,
          marginVertical: marginVertical ? size[marginVertical] : undefined,
          backgroundColor: background,
          height: height ? size[height] : undefined,
          borderRadius: borderRadius ? size[borderRadius] : undefined,
          width: width ? size[width] : undefined,
        },
        style,
      ]}
      {...props}
    />
  );
};

export const View = memo(forwardRef(ViewBase));
