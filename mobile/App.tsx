/* eslint-disable camelcase */
import { AuthProvider } from '@/contexts/AuthContext'
import { ColorModeProvider } from '@/contexts/ColorModeContext'
import { HttpServiceProvider } from '@/contexts/HttpServiceContext'
import { StorageProvider } from '@/contexts/StorageContext'
import { Routes } from '@/main/routes/routes'
import { Loading } from '@/ui/components/Loading'
import { StatusBar } from '@/ui/components/StatusBar'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
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
    <HttpServiceProvider>
      <StorageProvider>
        <AuthProvider>
          <ColorModeProvider>
            <StatusBar />
            <SafeAreaView
              style={{
                flex: 1,
              }}
            >
              {isFontsLoaded ? <Routes /> : <Loading />}
            </SafeAreaView>
            <Toast />
          </ColorModeProvider>
        </AuthProvider>
      </StorageProvider>
    </HttpServiceProvider>
  )
}
