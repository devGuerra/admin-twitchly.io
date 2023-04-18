import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUser } from "@/hooks/user";
import { api } from "@/services/api";
import { At, Lock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { user, login } = useUser();
  const { push } = useRouter();

  // if (user?.id) {
  //   return push("/dashboard");
  // }

  async function handleLogin() {
    try {
      login({
        email: "roberto1@gmail.com",
        password: "password",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className="flex items-center align-middle justify-center min-h-screen bg-gray-100">
        <div className="flex w-full flex-col gap-4 items-center lg:w-3/12">
          <Link href="/">
            <Image
              src="/images/logo-name.svg"
              alt="logo"
              width="128"
              height={32}
            />
          </Link>
          <div className="bg-white rounded-md flex flex-col p-6 lg:p-12 gap-4  w-full shadow-lg">
            <p className="text-2xl font-bold">Entrar</p>
            <p className="text-sm text-gray-600">Digite o seu e-mail e senha</p>
            <form action="" className="gap-4 flex flex-col">
              <Input
                icon={At}
                type="email"
                id="email"
                placeholder="Informe seu e-email"
                className="w-full"
                required
              />
              <Input
                icon={Lock}
                type="password"
                id="password"
                placeholder="Digite a senha"
                className="w-full"
                required
              />
              <Link
                href="/login/recovery"
                className="text-sm text-red-600 font-semibold"
              >
                Esqueci minha senha
              </Link>
              <Button type="button" onClick={handleLogin}>
                Entrar
              </Button>
            </form>
            <Link
              href="/register"
              className="text-sm text-center text-gray-600"
            >
              Não tem uma conta?{" "}
              <span className="text-red-600 font-semibold">Crie a sua</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
