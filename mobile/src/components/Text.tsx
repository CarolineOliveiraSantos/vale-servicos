import { FC } from 'react';
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
} from 'react-native';

import { useTheme } from '../hooks/useTheme';
import { ThemeColors } from '../styles/ThemeColors';
import { FontFamily } from '../styles/ThemeFonts';
import { TextSize } from '../styles/ThemeFontSize';
export interface TextProps extends ReactNativeTextProps {
  font?: keyof typeof FontFamily;
  size?: keyof typeof TextSize;
  color?: keyof (typeof ThemeColors)['text'];
}
export const Text: FC<TextProps> = ({
  font = 'Roboto.400',
  size = 'md',
  color = 'primary',
  style,
  ...props
}) => {
  const { textSize, fontFamily, colors } = useTheme();
  return (
    <ReactNativeText
      style={[
        {
          color: colors.text[color],
          fontSize: textSize[size].size,
          fontFamily: fontFamily[font],
          lineHeight: textSize[size].lineHeight,
        },
        style,
      ]}
      {...props}
    />
  );
};
