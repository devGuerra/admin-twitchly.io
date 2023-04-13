import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Seu filhote - A melhor Rede de Criadores do Brasil" />
      <Header />
      <main className="min-h-screen flex justify-center ">
        <div className="text-center mt-12">
          <h1 className="text-4xl">404</h1>
          <h2 className="text-lg">Page not found</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
