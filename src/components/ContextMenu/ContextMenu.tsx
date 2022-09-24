import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import useContextMenu from "src/hooks/useContextMenu";

const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  margin: 0;
  width: fit-content;
  height: fit-content;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 104;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -16px;
    left: 8px;
    border: 8px solid transparent;
    border-bottom: 8px solid white;
  }
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 6px;
    border: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.16);
  }
`;

const ContextMenu = ({ children }: { children: ReactNode }) => {
  const { setContent } = useContextMenu();
  const contextMenuRef = useRef(null);

  const closeContextMenu = (ev: any) => {
    if (
      contextMenuRef.current &&
      !(contextMenuRef.current as any).contains(ev.target)
    ) {
      setContent(null);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", closeContextMenu);
    });
    return () => {
      window.removeEventListener("click", closeContextMenu);
    };
  }, []);

  return <Wrapper ref={contextMenuRef}>{children}</Wrapper>;
};

export default ContextMenu;
