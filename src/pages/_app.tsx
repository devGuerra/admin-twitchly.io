import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { NextSeo } from "next-seo";

import { defaultSEOConfig } from "../../seo-config.config";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...defaultSEOConfig} />

      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
