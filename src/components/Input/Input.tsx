import React from 'react'
import { SearchButton, StyledInput, StyledInputContainer } from './styledInput'

const Input = () => {
  return (
    <StyledInputContainer>
    <StyledInput type="text"  placeholder='Type the name of book or author...'/>
      <SearchButton/>
    </StyledInputContainer>
  )
}

export default Input
