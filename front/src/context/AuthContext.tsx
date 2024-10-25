import { createContext, ReactNode, useContext, useState } from "react";
import { IAuthContextProps, IAuthState, IUser } from "../interfaces/interfaces";
import axios from "axios";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    user: null,
  });

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await axios.post(
        "https://api.qa.vitawallet.io/api/auth/sign_in",
        {
          email,
          password,
        }
      );

      const token = response.headers["access-token"];
      const user: IUser = response.data.user;

      setAuthState({
        token,
        user,
      });

      localStorage.setItem("token", token);

      return { success: true };
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return { success: false, error: (error as Error).message };
    }
  };

  const logout = () => {
    setAuthState({
      token: null,
      user: null,
    });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
