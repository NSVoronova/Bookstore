import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledBookBasketContainer = styled.div`
display: flex;
justify-content: space-between;
width: 400px;
height: 180px;
border-radius: 20px;
border: 2px dashed ${colors.lightgrey};
margin: 20px auto;
padding: 20px;
`

export const StyledImgBookBasket = styled.img`
width: 100px;
height: auto;
box-shadow: 10px 12px 10px -6px rgba(61, 60, 60, 0.36);
border-radius: 10px;
`