import React, { FC } from 'react'
import { StyledCategoryBtn } from './StyledButton'

interface IButton {
  text: string,
  onClick: () => void,
  $checked?: boolean
}

const Button: FC<IButton> = ({text, onClick, $checked }) => {
  return (
    <StyledCategoryBtn $checked={!!$checked} type='button' onClick={onClick}>
       {text}
    </StyledCategoryBtn>
  )
}

export default Button
