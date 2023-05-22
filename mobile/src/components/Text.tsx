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
  fontFamily?: keyof typeof FontFamily;
  fontSize?: keyof typeof TextSize;
  color?: keyof (typeof ThemeColors)['text'];
}
export const Text: FC<TextProps> = ({
  fontFamily = 'Roboto.400',
  fontSize = 'md',
  color = 'primary',

  style,
  ...props
}) => {
  const { textSize, fontFamily: font, colors } = useTheme();
  return (
    <ReactNativeText
      style={[
        {
          color: colors.text[color],
          fontSize: textSize[fontSize].fontSize,
          fontFamily: font[fontFamily],
          lineHeight: textSize[fontSize].lineHeight,
        },
        style,
      ]}
      {...props}
    />
  );
};
