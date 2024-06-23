import styled from "styled-components";
import { colors } from "../../styledConstants";
import arrow from '../../assets/icons/arrow_down.svg'

export const StyledCenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const StyledSelect = styled.select<{$categories?: boolean}>`
appearance: none;
cursor: pointer;
width: ${props => props.$categories ? "302px" : "169px"};
height: 50px;
border-radius: 20px;
border: 2px solid ${colors.darkgrey};
background:  #FFF;
margin-left: 10px;
box-shadow: 6px 7px 0px 0px ${colors.orange};
display: flex;
justify-content: space-between;
padding: 14px 25px;
background-image: url(${arrow});
background-repeat: no-repeat;
background-position: calc(100% - 10px) 50%;
font-family: Syne, sans-serif;
font-size: 16px;
  font-weight: 500;
  color: ${colors.darkgrey};
  &:focus {
    outline: none;
  }
` 
export const StyledArrowImg = styled.img`
margin-top: 7px;
width: 15px;
height: 7.5px;
`

export const StyledDashLine = styled.div`
width: 100%;
border-top: 2px dashed ${colors.darkgrey};
margin-top: 30px;
margin-bottom: 50px;
`
export const StyledOption = styled.option`
  cursor: pointer;
  background-color: #fff;
  font-family: Syne, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.darkgrey};
  padding: 10px;
  cursor: pointer;
  border: 2px solid ${colors.darkgrey};
  &:hover {
    cursor: pointer;
  }
`