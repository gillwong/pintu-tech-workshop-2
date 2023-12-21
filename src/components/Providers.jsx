import { createContext, useState } from "react";

export const PageContext = createContext(null);
export const PageSetterContext = createContext(null);

export default function Providers({ children }) {
  const [page, setPage] = useState("Home");

  return (
    <PageContext.Provider value={page}>
      <PageSetterContext.Provider value={setPage}>
        {children}
      </PageSetterContext.Provider>
    </PageContext.Provider>
  );
}
