import { ReactNode, Ref } from "react";

type ButtonProperties = {
  onClick?: any;
  className?: string;
  children?: ReactNode | null;
  ref?: any;
};

const Button = ({ onClick, className, children, ref }: ButtonProperties) => {
  return (
    <div
      className={`button${className ? " " + className : ""}`}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
