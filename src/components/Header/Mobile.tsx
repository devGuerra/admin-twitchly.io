import Image from "next/image";
import { List, UserCircle, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { headerLinks } from ".";
import { useSidebar } from "@/hooks/sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export function HeaderMobile() {
  const { status, data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  const { pathname } = useRouter();

  const handleMenu = () => {
    if (pathname.includes("/dashboard")) {
      toggleSidebar();
      return;
    }
    setIsOpen(!isOpen);
  };

  function renderAction() {
    if (status === "unauthenticated") {
      return (
        <Link href="/dashboard" className="text-md font-semibold text-white">
          <p className="font-bold">Login</p>
        </Link>
      );
    }

    if (pathname === "/dashboard" && data?.user.slug) {
      return (
        <Link
          href={data?.user.slug}
          className="text-md font-semibold text-white "
        >
          <p className="font-bold">Meu Site</p>
        </Link>
      );
    }

    return (
      <Link href="/dashboard" className="text-md font-semibold text-white">
        <p className="font-bold">Dashboard</p>
      </Link>
    );
  }

  return (
    <div className="relative lg:hidden">
      <header className=" flex items-center justify-between px-6 py-4 bg-gray-900 shadow-sm ">
        <Link
          href={pathname === "/dashboard" ? "/" : "/dashboard"}
          className="flex items-center gap-2 "
        >
          <Image
            src="/images/logo-name.svg"
            alt="logo"
            width={108}
            height={32}
          />
        </Link>

        <div className="flex items-center gap-2" onClick={handleMenu}>
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <List size={24} color="white" />
          )}
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
          <div className={`w-full absolut h-screen bg-gray-900`}>
            <ul className="p-6 ">
              <li className="flex flex-col gap-4 ">
                {headerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-md font-semibold text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* {renderAction()} */}
              </li>
            </ul>
          </div>
        </Transition>
      </nav>
    </div>
  );
}
