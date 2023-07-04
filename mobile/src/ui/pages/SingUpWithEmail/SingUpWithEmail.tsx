import { useNativeId } from '@/hooks/useNativeId'
import { useTheme } from '@/hooks/useTheme'
import { SingUpWithEmailUseCase } from '@/interfaces/use-cases/SingUpWithEmailUseCase'
import { Button as AppButton } from '@/ui/components/Button'
import { Icons } from '@/ui/components/Icons/Icons'
import { ControlledInput } from '@/ui/components/Input/ControlledInput'
import { Root } from '@/ui/components/Input/Root'
import { ScrollView } from '@/ui/components/shared/ScrollView'
import { Text } from '@/ui/components/shared/Text'
import { View } from '@/ui/components/shared/View'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {Button}from './components/Button'
import { Header } from './components/Header'
export interface SingUpWithEmailForm {
  email: string
}
const schema = yup.object({
  email: yup
    .string()
    .email('Por favor, informe um email válido')
    .required('Por favor, informe um email'),
})
export interface SingUpWithEmailProps {
  singUpWithEmailUseCase: SingUpWithEmailUseCase
}
export const SingUpWithEmail: React.FC<SingUpWithEmailProps> = ({
  singUpWithEmailUseCase,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SingUpWithEmailForm>({
    resolver: yupResolver(schema),
  })
  const { spacing, colors } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const emailId = useNativeId('email')
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
         Entre ou cadastre-se
        </Text>

        <Text nativeID={emailId} marginTop="md" variant="body">
          Email
        </Text>
        <Root
          errorMessage={errors.email?.message}
          marginTop="sm"
          _focus={{ borderWidth: 2 }}
        >
          <Icons.email color={colors['text-primary']} />
          <ControlledInput
            accessibilityLabelledBy={emailId}
            name="email"
            control={control}
            placeholder="Email"
            keyboardType="email-address"
            autoComplete="email"
          />
        </Root>
        <AppButton
        title="Criar minha conta"
        isLoading={isLoading}
        onPress={() =>{}}
      />


<Button
        icon={<Icons.google />}
        title="Continuar com Google"
        onPress={async () => {

        }}
      />
      <Button
        icon={<Icons.facebook />}
        title="Continuar com Facebook"
        onPress={async () => {

        }}
      />

      </ScrollView>

    </View>
  )
}
