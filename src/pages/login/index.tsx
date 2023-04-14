import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Transition } from "@headlessui/react";
import { At, Lock } from "@phosphor-icons/react";
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
      <Header />
      <main className="flex items-center justify-center py-20">
        <div className="bg-white rounded-md flex flex-col p-6 lg:p-12 gap-4 w-full lg:w-3/12">
          <p className="text:lg">Digite o seu e-mail e senha</p>
          <Input
            icon={At}
            type="email"
            id="email"
            placeholder="Informe seu e-email"
            className="w-full"
          />
          <Input
            icon={Lock}
            type="password"
            id="password"
            placeholder="Digite a senha"
            className="w-full"
          />
          <Link
            href="/login/recovery"
            className="text-xs text-red-600 font-semibold"
          >
            Esqueci minha senha
          </Link>
          <Button type="button">Entrar</Button>
          <Link href="#" className="text-xs font-semibold text-center">
            Não tem uma conta? <span className="text-red-600">Crie a sua</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
