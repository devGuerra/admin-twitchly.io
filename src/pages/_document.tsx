import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
import { defaultSEOConfig } from "../../seo-config.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
