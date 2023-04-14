import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { NextSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";

import { defaultSEOConfig } from "../../seo-config.config";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...defaultSEOConfig} />
      <NextNProgress color="#E11138" height={5} />
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "go4fu8cskt");`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
