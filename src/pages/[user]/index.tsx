import { SealCheck } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { GetServerSideProps } from "next";

import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { api } from "@/services/api";

type User = {
  user: {
    name: string | null;
    slug: string | null;
    avatar: string | null;
    description: string | null;
    socialMedias: [];
    pets: [];
  };
};

export default function User({ user }: User) {
  return (
    <>
      <Header />
      <NextSeo title={`${user.slug}`} />
      <main className="bg-white">
        {/* Hero */}
        <section className="mt-8 mb-48 flex justify-center items-center container lg:w-max-container mx-auto  bg-red-600 rounded p-8">
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="h-24 w-24 rounded-full border mb-4"
            />
            <h1 className="text-lg font-medium  mb-2 text-white  ">
              {user.name}
            </h1>
            <p className="text-sm  text-white">{user.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  req,
  res,
  ...rest
}) => {
  try {
    const user = params?.user;

    const { data: profile } = await api.get(`/users/${user}`);

    return {
      props: {
        user: profile,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
