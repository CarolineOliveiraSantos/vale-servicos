import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../hooks/useTheme';

export const Loading = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg.primary,
      }}
    >
      <ActivityIndicator size="large" color={colors.spinner.primary} />
    </SafeAreaView>
  );
};
