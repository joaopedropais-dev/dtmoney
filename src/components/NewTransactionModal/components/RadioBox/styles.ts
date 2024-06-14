import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
  $isActive: boolean;
  $activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const Container = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${(props) =>
    props.$isActive
      ? transparentize(0.8, colors[props.$activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
    font-family: "Poppins";
  }
`;
