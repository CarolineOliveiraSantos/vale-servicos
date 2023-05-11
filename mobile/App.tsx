/* eslint-disable camelcase */
import { StatusBar } from '@/components/StatusBar';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import { Loading } from './src/components/Loading';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { Routes } from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  return (
    <ThemeProvider>
      <StatusBar />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
