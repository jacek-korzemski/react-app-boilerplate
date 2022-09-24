import { useContext } from "react";
import { ModalContext } from "src/contexts/ModalContext";

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error("useModal context cannot be null");
  }

  return context;
};

export default useModal;
