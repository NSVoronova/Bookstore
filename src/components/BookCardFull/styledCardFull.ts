import styled from "styled-components";

export const StyledBookPageDiv = styled.div`
display: flex;
justify-content: space-around;
`

export const StyledCardDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
width: 526px;
`

export const StyledCardFullTitle = styled.div`
color: #3D3C3C;
font-family: Unica One;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const StyledAuthorDiv = styled.div`
margin-top: 10px;
width: 526px;
min-height: 66px;
border-radius: 20px;
border: 2px dashed  #3D3C3C;
background:  #FFF;
box-shadow: 9px 7px 0px 0px #3D3C3C;
color:  #676767;
font-family: Syne;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 25px 30px;
`
export const StyledBookImg = styled.img`
width: 280px;
height: 417px;
margin: auto 0;
`

export const StyledPriceBook = styled.p`
color: #F9784B;
font-family: Syne;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 50px;
margin-bottom: 25px;
`

export const StyledBuyButton = styled.button<{$buy?:boolean;}>`
cursor: pointer;
margin-top: 10px;
width: 255px;
height: 46px;
border: 2px solid #3D3C3C;
border-radius: 20px;
background-color: ${props => props.$buy ? "#F9784B" : "#FDBF0F"};
color: #3D3C3C;
font-family: Syne;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`