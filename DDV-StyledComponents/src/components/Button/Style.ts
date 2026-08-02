import styled, { css } from "styled-components";
import { ButtonVariation } from ".";

export const Container = styled.button<{ variation?: ButtonVariation }>`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  border-radius: 3rem;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.variation === ButtonVariation.OUTLINE
      ? css`
          background-color: transparent;
          color: ${(props) => props.theme.colors.primary};

          &:hover {
            background-color: ${(props) => props.theme.colors.primary};
            color: #fff;
          }
        `
      : null};
`;
