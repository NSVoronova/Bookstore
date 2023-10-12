import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledCenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const StyledSelectDiv = styled.select<{$categories?: boolean}>`
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
` 
export const StyledArrowImg = styled.img`
margin-top: 7px;
width: 15px;
height: 7.5px;
`