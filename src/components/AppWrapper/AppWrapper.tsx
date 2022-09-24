import { ReactNode } from "react";

import "src/css/normalize.css";
import "src/css/skeleton.css";
import "src/css/main.css";

const AppWrapper = ({ children }: { children: ReactNode | null }) => {
  return <>{children}</>;
};

export default AppWrapper;
