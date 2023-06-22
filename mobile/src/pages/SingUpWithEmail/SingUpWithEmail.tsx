import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons/Icons'
import { ControlledInput } from '@/components/Input/ControlledInput'
import { Root } from '@/components/Input/Root'
import { ScrollView } from '@/components/shared/ScrollView'
import { Text } from '@/components/shared/Text'
import { TouchableOpacity } from '@/components/shared/TouchableOpacity'
import { View } from '@/components/shared/View'
import { useHttpService } from '@/hooks/useHttpService'
import { useNativeId } from '@/hooks/useNativeId'
import { useTheme } from '@/hooks/useTheme'
import { ServiceSingUpWithEmail } from '@/services/ServiceSingUpWithEmail'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Header } from './components/Header'
export interface SingUpWithEmailForm {
  email: string
  password: string
  firstName: string
  lastName: string
}
const schema = yup.object({
  email: yup
    .string()
    .email('Por favor, informe um email válido')
    .required('Por favor, informe um email'),
  password: yup.string().min(6).required('Por favor, informe um senha'),
  firstName: yup.string().trim().min(3).required('Por favor, informe um nome'),
  lastName: yup
    .string()
    .trim()
    .min(3)
    .required('Por favor, informe um sobrenome'),
})
export const SingUpWithEmail = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SingUpWithEmailForm>({
    resolver: yupResolver(schema),
  })
  const { httpService } = useHttpService()
  const serviceSingUpWithEmail = new ServiceSingUpWithEmail(httpService)
  const { spacing, colors } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const emailId = useNativeId('email')
  const firstNameId = useNativeId('firstName')
  const lastNameId = useNativeId('lastName')
  const passwordId = useNativeId('password')
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
        <Text nativeID={passwordId} marginTop="sm" variant="body">
          Senha
        </Text>
        <Root
          errorMessage={errors.password?.message}
          marginTop="sm"
          accessibilityLabelledBy={passwordId}
          _focus={{ borderWidth: 2 }}
        >
          <Icons.lock color={colors['text-primary']} />
          <ControlledInput
            name="password"
            control={control}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            autoComplete="password-new"
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassword((prev) => !prev)
            }}
          >
            {showPassword ? (
              <Icons.eye color={colors['text-primary']} />
            ) : (
              <Icons.eyeOff color={colors['text-primary']} />
            )}
          </TouchableOpacity>
        </Root>

        <Text nativeID={firstNameId} marginTop="sm" variant="body">
          Nome
        </Text>
        <Root
          errorMessage={errors.firstName?.message}
          accessibilityLabelledBy={firstNameId}
          marginTop="sm"
          _focus={{ borderWidth: 2 }}
        >
          <ControlledInput
            name="firstName"
            control={control}
            placeholder="Nome"
          />
        </Root>

        <Text nativeID={lastNameId} marginTop="sm" variant="body">
          Sobrenome
        </Text>
        <Root
          errorMessage={errors.lastName?.message}
          accessibilityLabelledBy={lastNameId}
          marginTop="sm"
          _focus={{ borderWidth: 2 }}
        >
          <ControlledInput
            name="lastName"
            control={control}
            placeholder="Sobrenome"
          />
        </Root>
      </ScrollView>
      <Button
        title="Criar minha conta"
        onPress={handleSubmit(async (data) => {
          try {
            setIsLoading(true)
            const response = await serviceSingUpWithEmail.singUp(data)
            console.log(typeof response.contractor.updatedAt)
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message)
            }
          } finally {
            setIsLoading(false)
          }
        })}
        isLoading={isLoading}
      />
    </View>
  )
}
