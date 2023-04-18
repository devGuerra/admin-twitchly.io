import { useState } from "react";
import { SealCheck } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { api } from "@/services/api";
import { Alert } from "@/components/Alert";
import { GetServerSideProps } from "next";

const leadSchema = z.object({
  email: z.string().email(),
});

type LeadForm = z.infer<typeof leadSchema>;

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const registerForm = () => {
    const { register, formState, handleSubmit, setValue } = useForm<LeadForm>({
      resolver: zodResolver(leadSchema),
    });
    return { register, formState, handleSubmit, setValue };
  };

  const forms = {
    hero: registerForm(),
    footer: registerForm(),
  };

  async function handleLead({ email }: LeadForm) {
    try {
      const { data } = await api.post("/orgs/lead", {
        email,
      });

      setOpenModal(true);
      forms.footer.setValue("email", "");
      forms.hero.setValue("email", "");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <NextSeo title="Crie um catalago de filhotes com site para seu Canil" />
      <main className="bg-white">
        {/* Hero */}
        <section className="mt-16 mb-48 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8">
            <div className="flex flex-col flex-1 justify-center ">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-2  ">
                Você pode ter um site para seus{" "}
                <span className="text-red-600">filhotes</span>
              </h1>
              <p className="text:md lg:text-lg text-center lg:text-left text-gray-600">
                Tenha um catálogo com todos os seus filhotes e compartilhe seu
                site com seus clientes. A melhor rede de criadores do Brasil.
              </p>

              <Button type="button" className="lg:w-40 mt-2">
                Criar site
              </Button>
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/hero-phone.png"
                width={600}
                height={500}
                alt="Imagem mostra um exemplo do site"
                quality={100}
                unoptimized
                className="rounded-md "
              />
            </div>
          </div>
        </section>
        {/* Functionalities */}
        <section className="mb-32 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="flex flex-col">
              <Image
                src="/images/pet-page.png"
                width={600}
                height={500}
                alt="Imagem mostra um exemplo do site"
                quality={100}
                unoptimized
                className="rounded-md "
              />
            </div>
            <div className="flex flex-col flex-1  ">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-2  ">
                Aqui você pode atender{" "}
                <span className="text-red-600">mais clientes</span>
              </h2>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Você sempre online.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Seu catalogo na palma da mão.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Menos tempo com perguntas repetitivas.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Cadastro simples e rápido de seus filhotes.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Adicione a arvore genealógica de seus filhotes.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-600">
                  Compartilhe seu site com seus clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Site Examples */}
        <section className="mb-32 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-2  ">
              Seu site pronto em <span className="text-red-600">minutos</span>
            </h2>
            <p className="text:md lg:text-lg text-center  text-gray-600">
              Seu catalogo de filhotes com fotos e descrições, compartilhe seu
              site com seus clientes.
            </p>
            <div className="flex flex-col">
              <Image
                src="/images/site-example.png"
                width={1120}
                height={500}
                alt="Imagem mostra um exemplo do site"
                quality={100}
                unoptimized
                className="rounded-md opacity-70"
              />
            </div>
          </div>
        </section>
        <section className="mt-16 mb-48 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col flex-1 justify-center ">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-2  ">
                Comece agora mesmo e crie seu site em{" "}
                <span className="text-red-600">minutos</span>
              </h2>
              <p className="text:md lg:text-lg text-center lg:text-left text-gray-600">
                Você pode ter um site para seus filhotes, tenha um catálogo com
                todos os seus filhotes e compartilhe seu site com seus clientes.
              </p>

              <Button type="button" className=" mt-2">
                Criar site
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Alert
        open={openModal}
        title="Email cadastrado"
        description="Seu email foi cadastrado com sucesso, em breve você receberá atualizações sobre nossa plataforma."
        onClose={() => setOpenModal(false)}
        onConfirm={() => setOpenModal(false)}
      />
      <Footer />
    </>
  );
}
