import { FC, HTMLAttributes } from "react";
import { Container } from "./styles";

interface RadioBoxProps extends HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  activeColor: "green" | "red";
}

export const RadioBox: FC<RadioBoxProps> = ({
  activeColor,
  isActive,
  children,
  ...rest
}) => {
  return (
    <Container $activeColor={activeColor} $isActive={isActive} {...rest}>
      {children}
    </Container>
  );
};
