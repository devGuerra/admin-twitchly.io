import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PetCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="flex flex-row lg:flex-col lg:max-w-xxs lg:min-w-xxs  rounded-lg overflow-hidden "
    >
      <div className="">
        <Image
          src="/images/dog.png"
          alt=""
          width={400}
          height={400}
          className="p-1 rounded-lg w-full h-full aspect-auto"
        />
      </div>
      <div className="flex flex-col justify-between lg:justify-start py-4 px-2 md:px-4 flex-1">
        <span className="text-xs md:text-sm font-semibold">Shiba Inu</span>
        <span className="text-xs md:text-sm text-zinc-500">
          3 meses e 2 dias
        </span>
        <span className="text-xs md:text-sm text-zinc-500">Macho</span>
      </div>
      <div className="flex flex-col  p-4">
        <span className="text-xs md:text-sm  font-semibold">R$ 3.200</span>
      </div>
    </Link>
  );
};
