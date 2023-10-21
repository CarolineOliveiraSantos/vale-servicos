import { type Routes } from '@/@types/navigation'
import { Box } from '@/ui/components/shared/box'
import { Text } from '@/ui/components/shared/text'
import { TouchableOpacity } from '@/ui/components/shared/touchable-opacity'
import { R } from '@/ui/helpers/i18n/resources'
import { type NavigationProp, useNavigation } from '@react-navigation/native'

export const ButtonRedirectsToScreenRegister = () => {
  const { navigate } = useNavigation<NavigationProp<Routes>>()
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('sign-up-with-email')
      }}
      accessibilityRole="button"
    >
      <Box flexDirection="row" gap="2xs" justifyContent="center">
        <Text variant="body">{R.string.doNotHaveARegistrationYet} </Text>
        <Text variant="body">{R.string.register}</Text>
      </Box>
    </TouchableOpacity>
  )
}
