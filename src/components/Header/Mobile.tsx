import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { headerLinks } from ".";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <header className=" flex items-center justify-between px-6 py-4 bg-white shadow-sm ">
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/images/logo-name.svg"
            alt="logo"
            width={108}
            height={32}
          />
        </Link>

        <div
          className="flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </div>
      </header>
      <nav onClick={() => setIsOpen(!isOpen)}>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 -translate-x-4"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-4"
          className="w-3/4"
        >
          <div className={`w-full absolut h-screen bg-white`}>
            <ul className="p-6 ">
              <li className="flex flex-col gap-4 ">
                {headerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-md font-semibold "
                  >
                    {link.name}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </Transition>
      </nav>
    </div>
  );
}
