import { AuthProvider } from '@/contexts/AuthContext'
import { HttpServiceProvider } from '@/contexts/HttpServiceContext'
import { StorageProvider } from '@/contexts/StorageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { render, RenderOptions } from '@testing-library/react-native'
import { ReactNode, FC, ReactElement } from 'react'
export interface AllTheProvidersProps {
  children: ReactNode
}
const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <HttpServiceProvider>
      <StorageProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </StorageProvider>
    </HttpServiceProvider>
  )
}

function customRender<T>(ui: ReactElement<T>, options?: RenderOptions) {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react-native'

export { customRender as render }
