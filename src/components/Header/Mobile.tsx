import Image from "next/image";
import { List } from "@phosphor-icons/react";
import Link from "next/link";

export function HeaderMobile() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm lg:hidden">
      <Link href="/" className="flex items-center gap-2 ">
        <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
        <p className="text-lg font-bold">SeuFilhote</p>
      </Link>

      <div className="flex items-center gap-2">
        <List size={24} />
      </div>
    </header>
  );
}
