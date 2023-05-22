import { HStack } from '@/components/HStack';
import { Text } from '@/components/Text';
import { FC, ReactNode } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
export type ButtonProps = TouchableOpacityProps & {
  icon: ReactNode;
  title: string;
};

export const Button: FC<ButtonProps> = ({ icon, title, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <HStack
        height={20}
        alignItems="center"
        overflow="hidden"
        borderRadius={3}
        paddingHorizontal={10}
        backgroundColor="primary"
        style={{ borderColor: '#ccc', borderWidth: 1 }}
      >
        {icon}
        <Text
          fontSize="sm"
          fontFamily="Roboto.400"
          color="primary"
          style={{
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};
