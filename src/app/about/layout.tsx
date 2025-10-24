"use client";

import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#7e958d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return <div>{children}</div>;
};

export default Layout;
