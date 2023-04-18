import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useUser } from "@/hooks/user";
import { NextSeo } from "next-seo";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <Header />
      <NextSeo title="Painel" />
      <main className="bg-white">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold">Painel</h1>
        </div>
      </main>

      <Footer />
    </>
  );
}
