import { useEffect, useState, useTransition } from "react";
import { At, Lock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

import { Button } from "@/components/Button";
import { api } from "@/services/api";

const registerSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
  passwordConfirmation: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    startTransition(() => {
      setShow(true);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  async function handleSubmitForm({ email, password }: RegisterForm) {
    try {
      const { data } = await api.post("/users", {
        email,
        password,
      });

      // TODO: show toast
      alert("Conta criada com sucesso!");

      push("/login");
    } catch (error) {
      // TODO: show toast
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
          <div className=" rounded-md flex flex-col p-6 lg:p-12 gap-4  w-full shadow-lg">
            <p className="text-2xl font-bold">Criar Conta</p>
            <p className="text-sm text-gray-600">Digite o seu e-mail e senha</p>
            <form
              className="gap-4 flex flex-col"
              onSubmit={handleSubmit(handleSubmitForm)}
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
              <div>
                <div className="px-4 border rounded-md flex flex-1 gap-2 items-center">
                  <Lock size={24} />
                  <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className={`placeholder:text-sm placeholder:font-medium text-sm font-semibold border-transparent py-3 focus:border-transparent focus:ring-0 focus:outline-none w-full`}
                    {...register("passwordConfirmation")}
                  />
                </div>
                {errors.passwordConfirmation?.message && (
                  <span className="text-red-600 text-xs">
                    {errors.passwordConfirmation?.message}
                  </span>
                )}
              </div>

              <Button type="submit">Criar conta</Button>
            </form>
            <Link href="/login" className="text-sm text-center text-gray-600">
              Já tem uma conta?{" "}
              <span className="text-red-600 font-semibold">Entrar</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
