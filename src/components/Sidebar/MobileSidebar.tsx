import React, { useContext, useRef } from "react";
import SidebarContent from "./SidebarContent";
import SidebarContext from "@/context/SidebarContext";
import { Transition } from "@headlessui/react";
import { useSidebar } from "@/hooks/sidebar";
import { CaretDoubleLeft } from "@phosphor-icons/react";

function MobileSidebar() {
  const sidebarRef = useRef(null);
  const { isSidebarOpen, closeSidebar, saveScroll } = useSidebar();

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return (
    <Transition show={isSidebarOpen}>
      <>
        <Transition
          show={isSidebarOpen}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 -translate-x-4"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-4"
        >
          <aside
            id="mobileSidebar"
            ref={sidebarRef}
            className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white  lg:hidden"
          >
            <SidebarContent linkClicked={linkClickedHandler} />
          </aside>
        </Transition>
      </>
    </Transition>
  );
}

export default MobileSidebar;
