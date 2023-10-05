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
  margin-top: 100px;
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

export const StyledBookImg = styled.img`
  width: 141px;
  position: absolute;
  left: 430px;
  top: 250px;
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