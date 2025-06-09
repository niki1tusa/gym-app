import z from 'zod'

export const zodSchemaRegister = z.object({
  name: z
    .string()
    .nonempty({ message: "Имя не должно быть пустым" }),
  email: z
    .string()
    .nonempty({ message: "Email не должен быть пустым" })
    .email({ message: "Некорректный формат email" }),
  password: z
    .number()
    .min(6, { message: "Пароль должен содержать не менее 6 символов" })
});