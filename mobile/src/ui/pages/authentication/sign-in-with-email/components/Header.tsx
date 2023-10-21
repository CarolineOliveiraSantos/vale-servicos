import { Icons } from '@/ui/components/icons/icons'
import { RoundedIcon } from '@/ui/components/rounded-icon'
import { View } from '@/ui/components/shared/view'
import { R } from '@/ui/helpers/i18n/resources'
import { useTheme } from '@/ui/hooks/use-theme'
import { useNavigation } from '@react-navigation/native'

export const Header = () => {
  const { colors } = useTheme()
  const { goBack } = useNavigation()
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      paddingVertical="sm"
    >
      <RoundedIcon
        onPress={goBack}
        accessibilityLabel={R.string.goBack}
        accessibilityHint={R.string.navigateToThePreviousScreen}
      >
        <Icons.arrowLeft color={colors['text-primary']} />
      </RoundedIcon>
    </View>
  )
}
