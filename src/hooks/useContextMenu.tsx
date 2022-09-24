import { useContext } from "react";
import { ContextMenuContext } from "src/contexts/ContextMenuContext";

const useContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (context === null) {
    throw new Error("useContextMenu context cannot be null");
  }

  return context;
};

export default useContextMenu;
