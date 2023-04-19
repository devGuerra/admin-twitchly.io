import { PetCard } from "@/components/PetCard";
import { storageTokens } from "@/config/storageTokens";
import Layout from "@/containers/Layout";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import nookies from "nookies";

export default function Dashboard() {
  const { data } = useSession();

  return (
    <Layout>
      <div className="flex  flex-col gap-4">
        <h2 className="text-xl font-bold">Bem vindo, {data?.user?.name}</h2>

        {/* Estatísticas */}

        <div className="flex flex-col justify-between lg:flex-row gap-2 lg:gap-4">
          <div className="flex flex-row items-center justify-between  bg-white p-2 lg:p-4 2xl:p-6 rounded-lg w-full">
            <div className="">
              <h3 className="font-semibold text-sm 2xl:text-lg">
                Visualizações
              </h3>
              <span className="text-xs 2xl:text-md text-zinc-400">
                Visualizações totais do site
              </span>
            </div>
            <span className="text-md 2xl:text-lg text-right">1.123.0000</span>
          </div>
          <div className="flex flex-row items-center justify-between  bg-white p-2 lg:p-4 2xl:p-6 rounded-lg w-full">
            <div>
              <h3 className="font-semibold text-sm 2xl:text-lg">Filhotes</h3>
              <span className="text-xs 2xl:text-md text-zinc-400">
                Filhotes cadastrados no site
              </span>
            </div>
            <span className="text-md 2xl:text-lg text-right">12</span>
          </div>
          <div className="flex flex-row items-center justify-between  bg-white p-2 lg:p-4 2xl:p-6 rounded-lg w-full">
            <div>
              <h3 className="font-semibold text-sm 2xl:text-lg">Contatos</h3>
              <span className="text-xs 2xl:text-md text-zinc-400">
                Contatos recebidos pelo site
              </span>
            </div>
            <span className="text-md 2xl:text-lg text-right">3</span>
          </div>
        </div>
        <h2 className="text-xl font-bold">Ultimos filhotes</h2>
        <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap h-full  ">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  const token = cookies[storageTokens.token];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
