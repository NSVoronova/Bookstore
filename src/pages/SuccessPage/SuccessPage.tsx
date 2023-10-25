import React from 'react'
import Header from '../../components/Header/Header'
import { StyledIconBasket, StyledSuccessContainer, StyledSuccessIcon } from './styledSuccess'
import success_img from '../../assets/images/success.gif'
import basket_img from '../../assets/icons/busket.svg'
import { StyledCardFullTitle } from '../../components/BookCardFull/styledCardFull'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
    window.scrollTo(0, 0);
  }

  return (
    <div className='wrapper'>
      <Header/>
      <StyledSuccessContainer>
        <StyledSuccessIcon src={success_img} alt="success" />
        <StyledCardFullTitle>Thank you for order</StyledCardFullTitle>
        <p>Check your e-mail inbox for the receipt</p>
        <button onClick={handleHome}><StyledIconBasket src={basket_img} alt="basket" /> Continue Shopping</button>
      </StyledSuccessContainer>
    </div>
  )
}

export default SuccessPage
