import { Header } from "@/components/Header";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <Header />
      <NextSeo title="Seu filhote - A melhor Rede de Criadores do Brasil" />
      <main className=""></main>
    </>
  );
}
