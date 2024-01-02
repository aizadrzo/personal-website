import React, { PropsWithChildren } from "react";
import { Footer } from "..";

const Layout = ({ children }: PropsWithChildren) => (
    <main className="min-h-screen flex flex-col relative grain bg-neutral-100">
      <div className="container pt-[125px] flex-1 relative z-10">{children}</div>
      <Footer />
    </main>
  );

export default Layout;
