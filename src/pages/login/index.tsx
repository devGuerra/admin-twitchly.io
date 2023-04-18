import { At, Lock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUser } from "@/hooks/user";
import { useModal } from "@/hooks/modal";
import { useRouter } from "next/router";

const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Home() {
  const { login } = useUser();
  const { openModal } = useModal();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  async function handleLogin({ email, password }: LoginForm) {
    const data = await login({
      email,
      password,
    });

    if (data?.error) {
      openModal({
        title: "Erro ao fazer login",
        description: "Verifique se o e-mail e senha estão corretos",
        type: "error",
      });
    }

    push("/dashboard");
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
            <form
              action=""
              className="gap-4 flex flex-col"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <div className="px-4 border rounded-md flex flex-1 gap-2 items-center">
                  <At size={24} />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className={`placeholder:text-sm placeholder:font-medium text-sm font-semibold border-transparent py-3 focus:border-transparent focus:ring-0 focus:outline-none w-full`}
                    {...register("email")}
                  />
                </div>
                {errors.email?.message && (
                  <span className="text-red-600 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              <div>
                <div className="px-4 border rounded-md flex flex-1 gap-2 items-center">
                  <Lock size={24} />
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    className={`placeholder:text-sm placeholder:font-medium text-sm font-semibold border-transparent py-3 focus:border-transparent focus:ring-0 focus:outline-none w-full`}
                    {...register("password")}
                  />
                </div>
                {errors.password?.message && (
                  <span className="text-red-600 text-xs">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <Link
                href="/login/forget-password"
                className="text-sm text-red-600 font-semibold"
              >
                Esqueci minha senha
              </Link>
              <Button type="submit">Entrar</Button>
            </form>
            <Link
              href="/login/register"
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
