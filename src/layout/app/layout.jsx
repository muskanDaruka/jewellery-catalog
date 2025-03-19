import React from "react";
import Header from "./header";

function AppLayout({children}) {
  return <div className="relative">
    <Header/>
    {children}
  </div>;
}

export default AppLayout;
