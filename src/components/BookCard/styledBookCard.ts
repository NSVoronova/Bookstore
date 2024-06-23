import styled from "styled-components";

export const StyledBookWrapper = styled.div`
width: 200px;
display: flex;
flex-direction: column;
margin: 0 30px 30px;
`

export const StyledPriceDiv = styled.div`
display: inline-block;
width: 136px;
height: 46px;
border: 2px solid #3D3C3C;
border-radius: 20px;
color:  #3D3C3C;
text-align: center;
font-family: Syne, sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 5px;
`
export const StyledBookImage = styled.img`
cursor: pointer;
width: 200px;
height: 298px;
object-fit: cover;
object-position: center;
border-radius: 10px;
box-shadow: 10px 12px 10px -6px rgba(61, 60, 60, 0.36);
margin-bottom: 20px;
`