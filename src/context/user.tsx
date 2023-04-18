import { api } from "@/services/api";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

type UserLoginProps = {
  email: string;
  password: string;
};

type UserContextType = {
  user: any;
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
  const [user, setUser] = useState({});
  const { push } = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
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
    setUser({});
    localStorage.removeItem("user");
    push("/");
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
