import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { NextSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";

import { defaultSEOConfig } from "../../seo-config.config";
import { UserProvider } from "@/context/user";
import { ModalProvider } from "@/context/ModalContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...defaultSEOConfig} />
      <NextNProgress color="#E11138" height={5} />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JCQEN9LTEH"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JCQEN9LTEH');
        `,
        }}
      />
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
      <div className={poppins.className}>
        <ModalProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ModalProvider>
      </div>
    </>
  );
}
