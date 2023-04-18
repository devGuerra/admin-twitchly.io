import { storageTokens } from "@/config/storageTokens";
import api from "@/services/api";
import { useRouter } from "next/router";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";

type UserLoginProps = {
  email: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  slug: string;
  subcription_active: boolean;
  description: string;
};

type UserContextType = {
  user: User | null;
  login: ({}: UserLoginProps) => void;
  logout: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: {} as any,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({} as User | null);
  const { push, pathname } = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies[storageTokens.token];

    if (token && !user?.id) {
      api.get("/users/me").then((response) => {
        setUser(response.data);
      });

      return;
    }
  }, [pathname]);

  async function login({ email, password }: UserLoginProps) {
    try {
      const response = await api.post("/auth/sessions", {
        email,
        password,
      });

      setUser(response.data.user);

      setCookie(undefined, storageTokens.token, response.data.token, {
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
        sameSite: true,
      });

      setCookie(
        undefined,
        storageTokens.refreshToken,
        response.data.refreshToken,
        {
          maxAge: 60 * 60 * 24 * 7, // 30 days
          path: "/",
          sameSite: true,
        }
      );

      push("/dashboard");
    } catch (error) {
      throw new Error("Email ou senha inválidos");
    }
  }

  async function logout(redirect: string = "/") {
    setUser(null);
    destroyCookie(undefined, storageTokens.token);
    push(redirect);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
