import { Footer, Header } from "@/modules";
import { QueryProvider } from "@/query";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <QueryProvider>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </QueryProvider>
    </>
  );
};

export default Layout;
