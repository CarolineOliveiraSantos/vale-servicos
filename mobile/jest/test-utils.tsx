import { AuthProvider } from '@/ui/contexts/auth-context'
import { HttpClientProvider } from '@/ui/contexts/http-client-context'
import { StorageProvider } from '@/ui/contexts/storage-context'
import { render, type RenderOptions } from '@testing-library/react-native'
import { type ReactNode, type FC, type ReactElement } from 'react'

import { ColorModeProviderMock } from './mocks/ColorModeProviderMock'
export interface AllTheProvidersProps {
  children: ReactNode
}
const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <HttpClientProvider>
      <StorageProvider>
        <AuthProvider>
          <ColorModeProviderMock>{children}</ColorModeProviderMock>
        </AuthProvider>
      </StorageProvider>
    </HttpClientProvider>
  )
}

function customRender<T>(ui: ReactElement<T>, options?: RenderOptions) {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react-native'

export { customRender as render }
