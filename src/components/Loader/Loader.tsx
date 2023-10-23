import React from 'react'
import { StyledLoader, StyledLoaderContainer } from './styledLoader'
import loader from '../../assets/icons/loader.svg'

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoader>
        <img src={loader} alt="loader" />
      </StyledLoader>
    </StyledLoaderContainer>
  )
}

export default Loader
