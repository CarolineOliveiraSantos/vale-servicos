import { FC, ReactNode } from 'react';
import {
  Text,
  TouchableOpacityProps,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  type?: 'PRIMARY' | 'SECONDARY';
  icon: ReactNode;
  title: string;
};
export const Button: FC<ButtonProps> = ({
  type = 'PRIMARY',
  style,
  icon,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={[
          styles.button,
          {
            backgroundColor:
              type === 'PRIMARY' ? '#0426B0' : 'rgba(0, 0, 0, 0.8)',
          },
          style,
        ]}
      >
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
