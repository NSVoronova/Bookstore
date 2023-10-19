import React from 'react'
import { StyledBasketBtn } from './styledBasketBtn'

const BasketBtn = ({big}: {big: boolean}) => {
  const handleClick = () => {
    
  }
  return (
    <>
      <StyledBasketBtn $full={big} onClick={handleClick}/>
    </>
  )
}

export default BasketBtn
