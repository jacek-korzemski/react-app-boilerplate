import { createContext, ReactNode, useMemo, useState } from "react";

const ContextMenuContext = createContext<{
  content: null | ReactNode;
  setContent(content: ReactNode): void;
  setPosition({
    event,
    zIndex,
  }: {
    event: React.MouseEvent<HTMLElement>;
    zIndex?: number;
  }): void;
  contentPosition: { x: number; y: number; z?: number };
} | null>(null);

const ContextMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [contentPosition, setContentPosition] = useState<{
    x: number;
    y: number;
    z?: number;
  }>({ x: 0, y: 0, z: 100 });

  const setPosition = ({
    event,
    zIndex,
  }: {
    event: React.MouseEvent<HTMLElement>;
    zIndex?: number;
  }) => {
    let elemenet = (event.target as HTMLElement).getBoundingClientRect();
    let y = elemenet.bottom + 8;
    let x = elemenet.left + 8;
    let z = zIndex || 100;

    setContentPosition({ x, y, z });
  };

  const value = useMemo(
    () => ({
      content,
      setContent,
      setPosition,
      contentPosition,
    }),
    [content]
  );

  return (
    <ContextMenuContext.Provider value={value}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export { ContextMenuContextProvider, ContextMenuContext };
