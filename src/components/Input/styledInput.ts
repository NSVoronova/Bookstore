import styled from "styled-components";
import search_icon from '../../assets/icons/search_icon.svg'

export const StyledInput = styled.input`
border: 2px solid #3D3C3C;
border-radius: 20px;
width: 530px;
height: 42px;
box-shadow: 5px 10px 0px 0px #FDBF0F;
padding: 10px 20px;
outline: none;
&::placeholder {
  color: #3D3C3C;
  font-family: Syne, sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const StyledInputContainer = styled.div`
position: relative;
width: 530px;
`
export const SearchButton = styled.button`
position: absolute;
right: 20px;
top: 50%;
transform: translateY(-50%);
width: 18px;
height: 18px;
border: none;
background-color: white;
background-image: url(${search_icon});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
cursor: pointer;
`