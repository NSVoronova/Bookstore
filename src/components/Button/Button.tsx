import React, { FC } from 'react'
import { StyledCategoryBtn } from './StyledButton'

interface IButton {
  text: string,
  onClick: () => void
}

const Button: FC<IButton> = ({text, onClick }) => {
  return (
    <StyledCategoryBtn type='button' onClick={onClick}>
       {text}
    </StyledCategoryBtn>
  )
}

export default Button
