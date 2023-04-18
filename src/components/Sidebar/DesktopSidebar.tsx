import React, { useContext, useRef } from "react";
import SidebarContent from "./SidebarContent";
import SidebarContext from "@/context/SidebarContext";
import { useSidebar } from "@/hooks/sidebar";

function DesktopSidebar() {
  const sidebarRef = useRef(null);
  const { saveScroll } = useSidebar();

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current);
  };

  return (
    <aside
      id="desktopSidebar"
      ref={sidebarRef}
      className="z-30 flex-shrink-0 hidden w-64 pt-6 overflow-y-auto lg:block"
    >
      <SidebarContent linkClicked={linkClickedHandler} />
    </aside>
  );
}

export default DesktopSidebar;
