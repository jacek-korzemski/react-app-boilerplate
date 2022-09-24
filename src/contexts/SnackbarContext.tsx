import { createContext, ReactNode, useMemo, useState } from "react";
import generateId from "src/helpers/generateId";

type AlertProperties = {
  type: string;
  content: string | ReactNode;
  closeHandler: (id: string) => void;
  id: string;
};

const SnackbarContext = createContext<{
  addAlert: any;
  closeAlert: any;
  alerts: AlertProperties[];
} | null>(null);

const SnackbarContextProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertProperties[]>([]);

  const addAlert = ({
    type,
    content,
  }: {
    type: string;
    content: string | ReactNode;
  }) => {
    let id = generateId();
    let closeHandler = () => {
      closeAlert({ id });
    };
    setAlerts((prev) => [{ id, type, content, closeHandler }, ...prev]);
  };

  const closeAlert = ({ id }: { id: string }) => {
    setAlerts((prev) => [...prev.filter((elem) => elem.id !== id)]);
  };

  const value = useMemo(
    () => ({
      alerts,
      addAlert,
      closeAlert,
    }),
    [alerts]
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
};

export { SnackbarContextProvider, SnackbarContext };
