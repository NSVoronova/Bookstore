import styled from "styled-components";

export const colors = {
  blue: "#3AB8EB",
  orange: "#F9784B",
  darkgrey: "#3D3C3C",
  yellow: "#FDBF0F",
  lightgrey: "#676767",
  gradient:
    "linear-gradient(180deg, #3AB8EB 0%, #F9784B 35.21%, #FDBF0F 73.23%, #FFF 100%))",
};

export const StyledSimpleDiv= styled.div<{
  $between?: boolean;
  $around?: boolean;
  $evenly?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => {
    if (props.$between) return "space-between";
    if (props.$around) return "space-around";
    if (props.$evenly) return "space-evenly";
    return "center";
  }};
`;

export const StyledNullButton = styled.button`
border: none;
background-color: transparent;
`

