import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
