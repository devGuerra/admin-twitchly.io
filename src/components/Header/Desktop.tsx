import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { headerLinks } from ".";
import { useRouter } from "next/router";
import { protectedRoutes } from "@/config/protectedRoutes";
import { useSession } from "next-auth/react";

export function HeaderDesktop() {
  const { status, data } = useSession();

  const { pathname } = useRouter();

  function renderAction() {
    if (status === "unauthenticated") {
      return (
        <Link
          href="/login"
          className="flex items-center gap-2 w-32 justify-end"
        >
          <UserCircle size={24} color="white" />
          <p className="text-sm font-bold text-white">Login</p>
        </Link>
      );
    }

    return (
      <Link
        href="/dashboard"
        className="flex items-center gap-2 w-32 justify-end"
      >
        <UserCircle size={24} color="white" />
        <p className="text-xs font-semibold py-8 text-white">Dashboard</p>
      </Link>
    );
  }

  return (
    <div className="px-8  bg-gray-900 drop-shadow-sm ">
      <nav
        className={`items-center justify-between hidden lg:flex  mx-auto ${
          pathname.includes("dashboard") ? "" : "lg:w-max-container"
        }`}
      >
        <Link
          href={pathname === "/dashboard" ? "/" : "/"}
          className="flex items-center gap-2 w-32 py-4"
        >
          <Image
            src="/images/logo-name.svg"
            alt="logo"
            width="128"
            height={32}
          />
        </Link>
        {!protectedRoutes.includes(pathname) && (
          <div className="flex items-center gap-8">
            {headerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-xs font-semibold py-8 text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* {renderAction()} */}

        {/* <div className="">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2">
            <UserCircle size={24} />
            <p className="text-sm font-bold">Entrar</p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-32 p-4 flex justify-center rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>{({ active }) => <button>Edit</button>}</Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div> */}
      </nav>
    </div>
  );
}
