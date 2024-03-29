import { useTheme } from '@/ui/hooks/use-theme'
import { useNavigation } from '@react-navigation/native'
import { type FC } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
export interface ServicoModel {
  id: string
  name: string
  info: string
}
export interface ServiceProps {
  servico: ServicoModel
}

export const Service: FC<ServiceProps> = ({ servico }) => {
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  function handleNavigateToPrestadores() {
    navigate('Prestadores', { id: servico.id })
  }
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.descriptionContainer, { marginTop: 15 }]}
      onPress={handleNavigateToPrestadores}
      activeOpacity={0.8}
    >
      <View>
        <Text
          style={[
            styles.description,
            {
              fontSize: textSize.md.fontSize,
              lineHeight: textSize.md.fontSize,
              color: colors.text.primary,
            },
          ]}
        >
          {servico.name}
        </Text>
        <Text
          style={[
            styles.dataValue,
            {
              fontSize: textSize.md.fontSize,
              lineHeight: textSize.md.fontSize,
              color: colors.text.primary,
              fontFamily: fonts.Roboto[500],
            },
          ]}
        >
          {servico.info}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    height: 160,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    fontSize: 15,
    backgroundColor: 'rgba(4, 38, 176, 0.4)',
    paddingHorizontal: 5,
    color: '#41414d',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 15,
  },
  description: {
    marginStart: 110,
    paddingHorizontal: 10,
    fontSize: 17,
    flexDirection: 'row',
    color: 'black',
  },
  dataValue: {
    marginStart: 110,
    paddingHorizontal: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
  },
})
