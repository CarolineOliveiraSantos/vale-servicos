import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/ui/components/Button'
import { ControlledInput } from '@/ui/components/Input/ControlledInput'
import { Root } from '@/ui/components/Input/Root'
import { ScrollView } from '@/ui/components/shared/ScrollView'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import { useForm } from 'react-hook-form'

import { Header } from './components/Header'
export interface SingUpWithNumberPhoneForm {
  phoneNumber: string
  password: string
  firstName: string
  lastName: string
}
export const SingUpWithNumberPhone = () => {
  const { handleSubmit, control } = useForm<SingUpWithNumberPhoneForm>()
  const { spacing } = useTheme()

  return (
    <View
      flex={1}
      paddingHorizontal="xl"
      paddingVertical="md"
      backgroundColor="main-background"
    >
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
      >
        <Text variant="body" fontSize={22}>
          Criar uma conta
        </Text>

        <Text marginTop="md" variant="body">
          Número de celular
        </Text>
        <Root marginTop="sm" _focus={{ borderWidth: 2 }}>
          <ControlledInput
            name="phoneNumber"
            control={control}
            placeholder="Email"
          />
        </Root>
        <Text marginTop="sm" variant="body">
          Senha
        </Text>
        <Root marginTop="sm" _focus={{ borderWidth: 2 }}>
          <ControlledInput
            name="password"
            control={control}
            placeholder="Senha"
          />
        </Root>
        <Text marginTop="sm" variant="body">
          Nome
        </Text>
        <Root marginTop="sm" _focus={{ borderWidth: 2 }}>
          <ControlledInput
            name="firstName"
            control={control}
            placeholder="Nome"
          />
        </Root>
        <Text marginTop="sm" variant="body">
          Sobrenome
        </Text>
        <Root marginTop="sm" _focus={{ borderWidth: 2 }}>
          <ControlledInput
            name="lastName"
            control={control}
            placeholder="Sobrenome"
          />
        </Root>
      </ScrollView>
      <Button title="Criar minha conta" onPress={handleSubmit(console.log)} />
    </View>
  )
}
