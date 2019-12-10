import React from 'react'
import styled from 'styled-components'

const YoroiTechBlock = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  max-width:370px;
  margin: 31px;
  transition:500ms all;
  /* box-shadow: 0 2px 30px 0 rgba(229,229,229,0.5); */
  /* border:3px solid black; */

  &:hover{
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }
`;

const YoroiTechBlockContainerText = styled.div`
  font-size: 20px;
  color: #1D1E21;	
  font-weight: 500;
  font-family: Rubik;	
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
 
`;


const YoroiTechImage = styled.img`
  width:100%;
  height:auto;
  padding-bottom:38px;
`;

const YoroiTechDate = styled.data`
    color: #8C8C8C;	
    font-family: Rubik;	
    font-size: 14px;
    margin-bottom:15px;
`

const Blog = ({ imgSrc, date, description }) => {
  return (
    <YoroiTechBlock>
      <YoroiTechImage src={imgSrc} alt="Rust is a systems programming language that runs very quickly" />
      <YoroiTechDate>
        {date}
      </YoroiTechDate>
      <YoroiTechBlockContainerText>{description}</YoroiTechBlockContainerText>
    </YoroiTechBlock>
  )
}

export default Blog