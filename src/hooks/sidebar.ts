import SidebarContext from "@/context/SidebarContext";
import { useContext } from "react";

export const useSidebar = () => useContext(SidebarContext);