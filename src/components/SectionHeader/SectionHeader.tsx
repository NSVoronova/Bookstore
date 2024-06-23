import React, { FC } from 'react'
import { StyledSectionHeaderWrapper } from './styledSectionHeader';

interface ISectionHeader {
  headerName: string;
  imageSrc: string;
}
const SectionHeader: FC<ISectionHeader> = ({headerName, imageSrc}) => {
  return (
    <StyledSectionHeaderWrapper>
      <img src={imageSrc} alt="img" />
      <p>{headerName}</p>
    </StyledSectionHeaderWrapper>
  )
}

export default SectionHeader
