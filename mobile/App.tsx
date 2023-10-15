import { ReactNativeMMKVAdapter } from '@/infra/storage/react-native-mmkv-adapter'
import { Routes } from '@/main/routes/routes'
import { Loading } from '@/ui/components/loading'
import { StatusBar } from '@/ui/components/status-bar'
import { AuthProvider } from '@/ui/contexts/auth-context'
import { ColorModeProvider } from '@/ui/contexts/color-mode-context'
import { HttpClientProvider } from '@/ui/contexts/http-client-context'
import { StorageProvider } from '@/ui/contexts/storage-context'
import { R } from '@/ui/helpers/i18n/resources'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
export default function App() {
  useEffect(() => {
    R.load()
  }, [])
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
    Inter_500Medium,
  })

  return (
    <GestureHandlerRootView style={styles.container}>
      <HttpClientProvider>
        <StorageProvider>
          <AuthProvider>
            <ColorModeProvider storage={new ReactNativeMMKVAdapter()}>
              <StatusBar />
              <SafeAreaView style={styles.container}>
                {isFontsLoaded ? <Routes /> : <Loading />}
              </SafeAreaView>
              <Toast />
            </ColorModeProvider>
          </AuthProvider>
        </StorageProvider>
      </HttpClientProvider>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
