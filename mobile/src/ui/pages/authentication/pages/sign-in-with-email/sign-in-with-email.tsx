import { SingUpWithEmailUseCase } from '@/domain/use-cases/SingUpWithEmailUseCase'
import { Button } from '@/ui/components/button'
import { Icons } from '@/ui/components/icons/icons'
import { ControlledInput } from '@/ui/components/input/controlled-input'
import { Root } from '@/ui/components/input/root'
import { ScrollView } from '@/ui/components/shared/scroll-view'
import { Text } from '@/ui/components/shared/text'
import { View } from '@/ui/components/shared/view'
import { R } from '@/ui/helpers/i18n/resources'
import { useTheme } from '@/ui/hooks/use-theme'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useAuthWithEmail } from '../../hooks/use-auth-with-email'
import { ButtonRedirectsToScreenRegister } from './components/button-redirects-to-screen-register'
import { Header } from './components/Header'
import { schema } from './schema-validation'
export interface SingUpWithEmailForm {
  email: string
  password: string
}

export interface SingUpWithEmailProps {
  singUpWithEmailUseCase: SingUpWithEmailUseCase
}
export const SignInWithEmail: React.FC<SingUpWithEmailProps> = ({
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
          {R.string.welcomeBack}
        </Text>

        <Root
          errorMessage={errors.email?.message}
          style={{ marginTop: spacing.sm }}
        >
          <Icons.email color={colors['text-primary']} />
          <ControlledInput
            name="email"
            control={control}
            placeholder={R.string.email}
            keyboardType="email-address"
            autoComplete="email"
          />
        </Root>
        <Root
          errorMessage={errors.password?.message}
          style={{ marginTop: spacing.sm }}
        >
          <Icons.lock color={colors['text-primary']} />
          <ControlledInput
            name="password"
            control={control}
            placeholder={R.string.password}
            autoComplete="new-password"
            secureTextEntry
          />
        </Root>
        <Button
          title={R.string.continue}
          isLoading={authWithEmail.isLoading}
          onPress={handleSubmit(authWithEmail.execute)}
        />
        <ButtonRedirectsToScreenRegister />
      </ScrollView>
    </View>
  )
}
