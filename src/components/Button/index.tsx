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
  isLoading?: boolean;
  ondClick: () => void;
};

function Button({ children, isLoading, ondClick }: Props) {
  return (
    // <button
    //  onClick={ondClick}
    // disabled={isLoding}
    // type="button"
    <Btn onClick={ondClick} disabled={isLoading} type="button">
      {isLoading ? "Cargando...." : children}
    </Btn>
  );
}

export default Button;
