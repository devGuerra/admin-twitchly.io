import { protectedRoutes } from "@/config/protectedRoutes";
import { api } from "@/services/api";
import { useRouter } from "next/router";
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
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      return;
    }
    if (protectedRoutes.includes(pathname)) {
      push("/");
    }
  }, []);

  async function login({ email, password }: UserLoginProps) {
    try {
      const { data } = await api.post("/auth/sessions", {
        email,
        password,
      });

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("user");
    push("/");
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
