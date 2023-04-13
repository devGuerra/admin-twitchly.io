import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
import { defaultSEOConfig } from "../../seo-config.config";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
