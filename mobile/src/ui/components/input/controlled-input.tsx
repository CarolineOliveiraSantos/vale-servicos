import {
  Controller,
  type UseControllerProps,
  type FieldValues,
} from 'react-hook-form'

import { Input, type InputProps } from './input'
export type ControlledInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T>
export function ControlledInput<FormType extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  onBlur,
  onChangeText,
  ...props
}: ControlledInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <Input
          onBlur={(e) => {
            field.onBlur()
            if (onBlur) {
              onBlur(e)
            }
          }}
          onChangeText={(text) => {
            field.onChange(text)
            if (onChangeText) {
              onChangeText(text)
            }
          }}
          value={field.value}
          {...props}
        />
      )}
    />
  )
}
