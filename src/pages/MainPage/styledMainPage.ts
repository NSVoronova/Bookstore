import styled from "styled-components";
import exploreBtn from '../../assets/icons/explore_default.svg'
import exploreHoverBtn from '../../assets/icons/explore_hover.svg'


export const StyledMainImg = styled.img`
  width: 484px;
  height: 503px;
  object-fit: cover;
  border-radius: 0px 20px;
  border: 2px solid #3d3c3c;
  box-shadow: -42px -35px 0px 0px #3ab8eb;
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledMainHeader = styled.h1`
  width: 481px;
  color: #3d3c3c;
  font-family: Syne, sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 18px;
`;

export const StyledBookGif = styled.img`
  width: 141px;
  position: absolute;
  left: 430px;
  top: 258px;
`

export const StyledMainText = styled.p`
color: #676767;
font-family: Syne, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 34px;
`

export const StyledExploreButton = styled.button`
width: 153px;
height: 51px;
border:none;
background-image: url(${exploreBtn});
transition: background-image 0.3s ease;
margin-top: 34px;
&:hover {
  cursor: pointer;
  background-image: url(${exploreHoverBtn});
}
`

export const StyledDashedDiv = styled.div`
position: relative;
left: 177px;
top: -30px;
  width: 353px;
  border-top: 2px dashed #676767;
`
export const StyledFlexDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
row-gap: 50px;
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 20px)); 
  gap: 20px; 
  justify-content: start; 

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, calc(33.33% - 20px));
  }
`