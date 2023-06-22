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
        <div tw=" flex ">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-center p-8 ">
            <h2 tw="flex flex-col text-4xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center items-center">
              <img
                src="https://www.twitchly.io/images/logo.svg"
                tw="w-12 object-cover rounded-md mx-auto"
                alt="Imagem mostra um exemplo do site"
              />
              <span tw="my-2">Improve your growth</span>
              <span tw="text-red-600">twitchly.io</span>
            </h2>
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
