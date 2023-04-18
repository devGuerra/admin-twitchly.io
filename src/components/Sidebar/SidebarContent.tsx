import Link from "next/link";

import SidebarSubmenu from "./SidebarSubmenu";
import { useRouter } from "next/router";
import routes, { routeIsActive } from "./routes";
import * as Icon from "@phosphor-icons/react/dist/icons/AddressBook";
import { SignOut } from "@phosphor-icons/react";
import { useUser } from "@/hooks/user";

interface ISidebarContent {
  linkClicked: () => void;
}

function SidebarContent({ linkClicked }: ISidebarContent) {
  const { pathname } = useRouter();
  const { logout } = useUser();

  function renderIcon(icon: any) {
    const IconComponent = icon;
    return <IconComponent size={24} />;
  }

  return (
    <div className="text-gray-500 ">
      <ul>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu
              route={route}
              key={route.name}
              linkClicked={linkClicked}
            />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <Link
                href={route.path || "#"}
                scroll={false}
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800  ${
                  routeIsActive(pathname, route) ? "text-gray-800" : ""
                }`}
                onClick={linkClicked}
              >
                {routeIsActive(pathname, route) && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                )}
                <div className="flex flex-row gap-4 items-center">
                  {renderIcon(route.icon)}
                  <span className="text-md font-semibold">{route.name}</span>
                </div>
              </Link>
            </li>
          )
        )}
        <li className="relative px-6 py-3">
          <a
            href={"/"}
            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800`}
            onClick={logout}
          >
            <div className="flex flex-row gap-4 items-center">
              <SignOut size={24} />
              <span className="text-md font-semibold">Sair</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarContent;
