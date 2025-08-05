import type { ReactNode } from "react";
import styled from "styled-components";

//import styles from "./Button.module.css";
type BtnProps = {
  isLoading: boolean;
};

const Btn = styled.button<BtnProps>`
  background-color: ${(props) =>
    props.isLoading ? "lightgray" : "chartreuse"};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;
type Props = {
  children: ReactNode;
  isLoding?: boolean;
  ondClick: () => void;
};

function Button({ children, isLoding, onClick }: Props) {
  return (
    // <button
    //  onClick={ondClick}
    // disabled={isLoding}
    // type="button"
    <Btn onClick={onClick} disabled={isLoding} isLoading={isLoding}>
      {isLoding ? "Cargando...." : children}
    </Btn>
  );
}

export default Button;
