import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Transition } from "@headlessui/react";
import { At, Lock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState, useTransition } from "react";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShow(true);
    });
  }, []);

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
            <p className="text-2xl font-bold">Criar Conta</p>
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
              <Input
                icon={Lock}
                type="password"
                id="password"
                placeholder="Digite a senha"
                className="w-full"
                required
              />

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
