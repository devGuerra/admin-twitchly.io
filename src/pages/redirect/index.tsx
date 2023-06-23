import React, { useEffect } from "react";
import { SealCheck } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Android() {
  useEffect(() => {
    window.location.href = "twitchly://";
  }, []);

  return (
    <>
      <Header />
      <NextSeo title="Twichly - Improve your twitch growth" />
      <main className="">
        {/* Hero */}
        <section className="mt-16 mb-4 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8">
            <div className="flex flex-col flex-1 justify-center ">
              <h1 className=" font-extrabold text-center lg:text-left mb-2 mt-4  ">
                Loading...
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
