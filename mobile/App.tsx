/* eslint-disable camelcase */
import { Loading } from '@/components/Loading'
import { StatusBar } from '@/components/StatusBar'
import { AuthProvider } from '@/contexts/AuthContext'
import { HttpServiceProvider } from '@/contexts/HttpServiceContext'
import { StorageProvider } from '@/contexts/StorageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Routes } from '@/routes/routes'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

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
          <ThemeProvider>
            <StatusBar />
            {isFontsLoaded ? <Routes /> : <Loading />}
          </ThemeProvider>
        </AuthProvider>
      </StorageProvider>
    </HttpServiceProvider>
  )
}
