import React, { FC } from "react";
import { SearchButton, StyledInput, StyledInputContainer } from "./styledInput";

interface IInput {
  value?: string;
  onClick: () => void;
  onChange: (value: string) => void;
}
const Input: FC<IInput> = ({ onClick, value, onChange }) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="Type the name of book or author..."
        value={value ?? ""}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <SearchButton onClick={onClick} />
    </StyledInputContainer>
  );
};

export default Input;
