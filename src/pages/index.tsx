import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Header />

      <main className=""></main>
    </>
  );
}
