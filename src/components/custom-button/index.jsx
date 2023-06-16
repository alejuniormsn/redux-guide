import React from "react";
import { CustomButtonContainer, IconContainer } from "./styles";

export default function CustomButton({ children, startIcon, ...rest }) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  );
}
