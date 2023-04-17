import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config = {
  runtime: "edge",
};

export default async function () {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        tw="border-8 border-red-600"
      >
        <div tw="bg-white flex ">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-center p-8 ">
            <h2 tw="flex flex-col text-4xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center items-center">
              <img
                src="https://www.seufilhote.com.br/images/logo.svg"
                tw="w-12 object-cover rounded-md mx-auto"
                alt="Imagem mostra um exemplo do site"
              />
              <span tw="my-2">Crie seu Catalogo online</span>
              <span tw="text-red-600">www.seufilhote.com.br</span>
            </h2>
            <div tw="mt-8 flex md:mt-0 ">
              <img
                src="https://www.seufilhote.com.br/images/pet-page.png"
                tw="w-128 object-cover rounded-md"
                alt="Imagem mostra um exemplo do site"
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
