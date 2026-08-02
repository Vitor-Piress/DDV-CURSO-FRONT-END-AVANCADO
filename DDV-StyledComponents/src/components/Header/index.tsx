import { Button } from "../Button";
import { Link } from "../Link";
import * as S from "./Style";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Title>Header</S.Title>
      <S.Navigation>
        <S.NavLink href="">item01</S.NavLink>
        <Link href="">item02</Link>
        <Button>Botão Elemento</Button>
      </S.Navigation>
    </S.HeaderContainer>
  );
};
