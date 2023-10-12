import { SingUpWithEmailUseCase } from '@/domain/use-cases/SingUpWithEmailUseCase'
import { Button } from '@/ui/components/Button'
import { Icons } from '@/ui/components/Icons/Icons'
import { ControlledInput } from '@/ui/components/Input/ControlledInput'
import { Root } from '@/ui/components/Input/Root'
import { Box } from '@/ui/components/shared/Box'
import { ScrollView } from '@/ui/components/shared/ScrollView'
import { Text } from '@/ui/components/shared/Text'
import { TouchableOpacity } from '@/ui/components/shared/TouchableOpacity'
import { View } from '@/ui/components/shared/View'
import { useTheme } from '@/ui/hooks/use-theme'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useAuthWithEmail } from '../../hooks/useAuthWithEmail'
import { Header } from './components/Header'
export interface SingUpWithEmailForm {
  email: string
  password: string
}
const schema = yup.object({
  email: yup
    .string()
    .email('Por favor, informe um email válido')
    .required('Por favor, informe um email'),
  password: yup
    .string()
    .min(6, 'Informe uma senha com mais de 6 caracteres')
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
  const authWithEmail = useAuthWithEmail({
    singUpWithEmailUseCase,
  })
  const { spacing, colors } = useTheme()
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
          Bem vindo de volta
        </Text>

        <Root
          errorMessage={errors.email?.message}
          marginTop="sm"
          _focus={{ borderWidth: 1 }}
        >
          <ControlledInput
            name="email"
            control={control}
            placeholder="Email"
            keyboardType="email-address"
            autoComplete="email"
          />
          <Icons.email color={colors['text-primary']} />
        </Root>
        <Root
          errorMessage={errors.password?.message}
          marginTop="sm"
          _focus={{ borderWidth: 1 }}
        >
          <ControlledInput
            name="password"
            control={control}
            placeholder="Senha"
            autoComplete="new-password"
          />
          <Icons.lock color={colors['text-primary']} />
        </Root>
        <Button
          title="Criar minha conta"
          isLoading={authWithEmail.isLoading}
          onPress={handleSubmit(authWithEmail.execute)}
        />
        <TouchableOpacity accessibilityRole="button">
          <Box flexDirection="row" gap="2xs" justifyContent="center">
            <Text>Ainda não possui cadastro?</Text>
            <Text>Cadastre-se</Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
