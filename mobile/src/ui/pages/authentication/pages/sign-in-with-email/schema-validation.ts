import { R } from '@/ui/helpers/i18n/resources'
import * as yup from 'yup'
export const schema = yup.object({
  email: yup
    .string()
    .email(R.string.pleaseProvideAValidEmail)
    .required(R.string.enterYourEmail),
  password: yup
    .string()
    .min(6, R.string.mustHaveAtLeast6Characters)
    .required(R.string.enterYourPassword),
})
