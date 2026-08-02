import type { AnchorHTMLAttributes, ReactNode } from "react";
import * as S from "./Style";

type LinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...rest }: LinkProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
