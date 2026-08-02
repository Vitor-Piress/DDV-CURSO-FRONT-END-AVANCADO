import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Styles.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className="button-button">
      {children}
    </button>
  );
};
