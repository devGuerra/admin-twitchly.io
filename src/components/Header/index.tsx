import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { HeaderDesktop } from "./Desktop";
import { HeaderMobile } from "./Mobile";

export const headerLinks = [
  {
    name: "Filhotes",
    href: "/filhotes",
  },
  {
    name: "Criares",
    href: "/criadores",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Sobre",
    href: "/sobre",
  },
];

export function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
