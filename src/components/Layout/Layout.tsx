import React, { ReactNode } from "react";
import { Footer } from "..";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container pt-[125px] flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
