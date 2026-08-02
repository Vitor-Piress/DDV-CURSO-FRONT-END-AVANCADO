import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./Style";

export enum ButtonVariation {
  DEFAULT = "DEFAULT",
  OUTLINE = "OUTLINE",
}

export type ButtonProps = {
  children: ReactNode;
  variation?: ButtonVariation;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variation = ButtonVariation.DEFAULT,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container variation={ButtonVariation.OUTLINE} {...rest}>
      {children}
    </S.Container>
  );
};
