import React, { FC, ReactNode } from 'react'
import { StyledCategoryBtn } from './StyledButton'

interface IButton {
  onClick: () => void,
  $checked?: boolean,
  text: "string" | ReactNode
}

const Button: FC<IButton> = ({text, onClick, $checked }) => {
  return (
    <StyledCategoryBtn $checked={!!$checked} type='button' onClick={onClick}>
       {text}
    </StyledCategoryBtn>
  )
}

export default Button
