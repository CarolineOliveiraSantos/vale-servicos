import { createContext, FC, useState } from 'react'
export interface UserDto {}

export interface AuthContextProps {
  setUser: (user: UserDto | null) => Promise<void>
  user: UserDto | null
}
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export const AuthProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserDto | null>(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: async (user) => {
          setUser(user)
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
