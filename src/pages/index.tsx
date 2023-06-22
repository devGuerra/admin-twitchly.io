import { SealCheck } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <NextSeo title="Twichly - Improve your twitch growth" />
      <main className="">
        {/* Hero */}
        <section className="mt-16 mb-48 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8">
            <div className="flex flex-col flex-1 justify-center max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-2  ">
                Improve your{" "}
                <span className="text-purple-600">Twitch Channel</span>
              </h1>
              <p className="text:md lg:text-lg text-center lg:text-left text-gray-400">
                Twitchly is a platform that helps you to improve your channel
                growth, with a lot of features that will help you to get more
                followers and viewers.
              </p>

              {/* <Button type="button" className="lg:w-40 mt-2">
                Criar site
              </Button> */}
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/hero-phone.png"
                height={500}
                width={300}
                alt="Example of the application"
                quality={100}
                unoptimized
                className="rounded-md self-center"
              />
            </div>
          </div>
        </section>
        {/* Functionalities */}
        <section className="mb-32 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="flex flex-col">
              <Image
                src="/images/bonus-screen.png"
                width={300}
                height={500}
                alt="Imagem mostra um exemplo do site"
                quality={100}
                unoptimized
                className="rounded-md "
              />
            </div>
            <div className="flex flex-col flex-1  max-w-2xl justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left mb-2  ">
                Get bonus <span className="text-purple-600">FREE</span>
              </h2>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-400">
                  Get bonus for follow
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-400">
                  Get bonus for daily access.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <SealCheck size={24} color="#27AE60" />
                <p className="text:md lg:text-lg text-left text-gray-400">
                  Get bonus for refer a friend.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Site Examples */}

        <section className="mt-16 mb-48 flex justify-center items-center container lg:w-max-container mx-auto px-4 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col flex-1 justify-center ">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-center  mb-2  ">
                <span className="text-purple-600 ">Download now</span>
              </h2>
              <p className="text:md lg:text-lg text-center lg:text-left text-gray-400">
                Download now and start to improve your channel growth.
              </p>
              <div className="flex justify-around mt-9 flex-col items-center gap-4s lg:flex-row">
                <Link href="https://apps.apple.com/us/app/twitchly-increase-your-growth/id6450406278">
                  <Image
                    src="/images/apple-download.png"
                    width={200}
                    height={60}
                    alt="download apple"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.mobird.twitchly">
                  <Image
                    src="/images/android-download.png"
                    width={200}
                    height={60}
                    alt="download apple"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
