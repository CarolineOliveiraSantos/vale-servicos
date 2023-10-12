/* eslint-disable camelcase */
import { Routes } from '@/main/routes/routes'
import { Loading } from '@/ui/components/Loading'
import { StatusBar } from '@/ui/components/StatusBar'
import { AuthProvider } from '@/ui/contexts/auth-context'
import { ColorModeProvider } from '@/ui/contexts/color-mode-context'
import { HttpClientProvider } from '@/ui/contexts/http-client-context'
import { StorageProvider } from '@/ui/contexts/storage-context'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
    Inter_500Medium,
  })
  return (
    <HttpClientProvider>
      <StorageProvider>
        <AuthProvider>
          <ColorModeProvider>
            <StatusBar />
            <SafeAreaView style={styles.container}>
              {isFontsLoaded ? <Routes /> : <Loading />}
            </SafeAreaView>
            <Toast />
          </ColorModeProvider>
        </AuthProvider>
      </StorageProvider>
    </HttpClientProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
