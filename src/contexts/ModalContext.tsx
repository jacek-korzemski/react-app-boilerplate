import { createContext, ReactNode, useMemo, useState } from "react";

const ModalContext = createContext<{
  content: null | ReactNode;
  setContent(content: ReactNode): void;
} | null>(null);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const value = useMemo(
    () => ({
      content,
      setContent,
    }),
    [content]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
