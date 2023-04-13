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
