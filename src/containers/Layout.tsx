import { useContext } from "react";
import Main from "./Main";
import SidebarContext, { SidebarProvider } from "@/context/SidebarContext";
import Sidebar from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <SidebarProvider>
      <Header />
      <div className={`flex overflow-hidden `}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full ">
          <Main>{children}</Main>
        </div>
      </div>
      <Footer />
    </SidebarProvider>
  );
}

export default Layout;
