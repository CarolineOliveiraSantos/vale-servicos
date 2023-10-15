import { AuthProvider } from '@/ui/contexts/AuthContext'
import { HttpServiceProvider } from '@/ui/contexts/HttpServiceContext'
import { StorageProvider } from '@/ui/contexts/StorageContext'
import { render, type RenderOptions } from '@testing-library/react-native'
import { type ReactNode, type FC, type ReactElement } from 'react'

import { ColorModeProviderMock } from './mocks/ColorModeProviderMock'
export interface AllTheProvidersProps {
  children: ReactNode
}
const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <HttpServiceProvider>
      <StorageProvider>
        <AuthProvider>
          <ColorModeProviderMock>{children}</ColorModeProviderMock>
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
