import { useContext } from "react";
import { SnackbarContext } from "src/contexts/SnackbarContext";

const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (context === null) {
    throw new Error("useSnackbar context cannot be null");
  }

  return context;
};

export default useSnackbar;
