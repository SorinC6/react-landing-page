import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';

const YoroiTechBlocks = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (mix-width: 700px) {
    flex-direction: row;
  }
  margin-bottom: 10px;
  width: 106%;
`;

const YoroiTechBlock = styled.div`
  text-align: center;
  flex: 1;
  margin-top: 8px;
  border-radius: 16px;
  box-shadow: 0 2px 30px 0 rgba(229,229,229,0.5);
  
  a{
    text-decoration: none;
    transition: all 5s;
    
    &:hover > div{
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid #a6b4f4;
    }
  }
`;

const YoroiTechBlockContainerText = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #847e7e;
  text-align: center;
`;

const YoroiTechBlockContainerTextL = styled.div`
  font-size: 14px;
  color: #847e7e;
  text-align: left;
  color: white;
  position: relative;
  top: 32px;
  line-height: 22px;
`;

const YoroiTechImage = styled.img`
  margin-top: 4px;
  margin-bottom: 4px;
  max-width: 114px;
  max-height: 114px;
  min-height: 114px;
`;
const YoroiTechLink = styled.a`
  font-size: 20px;
  text-decoration: none;
`;

const YoroiTechBlueBackground = styled.div`
  border-radius: 30px;
  background-image: linear-gradient(to right, #1850d7, #4763fb 20%);
  width: 400px;
  height: 400px;
  z-index: 1;
  transform: rotate(-15deg);
  top: -285px;
  right: -225px;
  position: relative;
`;

const YoroiTechGreyBackground = styled.div`
height: 801.07px;	
width: 1961.34px;	
transform: skew(-40deg, 11deg) rotate(-140deg);	
background-color: rgba(240,243,245,0.4);
position: relative;
border-radius: 32px;
top: -364px;
right: 600px;
z-index: -1;
overflow: hidden;
`;

const YoroiTechPad = styled.div`
  padding-left: 10px;
`;

const YoroiTechBlocksLarge = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const YoroiTechBlockLarge = styled.div`
  text-align: center;
  flex: 2.15;
  box-shadow: 0 2px 30px 0 rgba(229,229,229,0.5);
  border-radius: 16px;

  a{
    text-decoration: none;
    transition: all 5s;    
    &:hover > div{
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid #a6b4f4;
    }
  }
`;

const YoroiTechBlockInner = styled.div`
  border-radius: 20px;
  border: 1px solid white;
  background-color: #f4f4f7;
  margin: 0 auto;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;

const YoroiTechBlockInnerWhite = styled(YoroiTechBlockInner)`
  background-color: white;
  @media (min-width: 700px) {
    min-height: 364px;
  }
`;

const YoroiTechBlockWhiteLarge = styled(YoroiTechBlockInner)`
  background-color: white;
  flex: 2.15;
  overflow: hidden;
  height: 290px;
  width: 523px;
`;

const YoroiTechBlockWhiteLargeFlex = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TechFlex = styled.div`
  flex: 0.8;
`;

const YoroiTechLinkLarge = styled(YoroiTechLink)`
  color: white;
  position: relative;
  font-size: 25px;
  font-weight: 300;
`;

const YoroiTechBlockTitle = styled.div`
  font-size: 24px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YoroiRoadBlockTitleRel = styled(YoroiTechBlockTitle)`
  color: white;
  position: relative;
  top: 30px;
  justify-content: normal;
`;

const YoroiTechBlockContainer = styled.div`
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
  color: #847e7e;
  padding-bottom: 20px;
`;

const YoroiTechBlockContainerNoLPad = styled.div`
  text-align: left;
  padding-left: 0px;
  padding-right: 10px;
  font-size: 13px;
  color: #847e7e;
  padding-bottom: 20px;
`;

const YoroiTechBlockContainerFlex = styled(YoroiTechBlockContainer)`
  flex: 1;
`;

const Arrow = styled.i`
  font-size: 12px;
  margin-left: 9px;
  font-weight: 100;
  position: relative;
  top: -3px;
`;

class Technologies extends Component {
  render() {
    const _Technologies = ({ intl: { formatMessage } }) => (
      <Container style={{ paddingBottom: '30px' }}>
        <SectionTitle style={{ paddingBottom: '10px' }}>{formatMessage({ id: 'home.technologies.technologies' })}</SectionTitle>
        <YoroiTechBlocks style={{marginLeft: '-34px'}}>
          <YoroiTechBlock>
            <a target="_blank" href="https://github.com/rust-lang/rust">
              <YoroiTechBlockInnerWhite>
                <YoroiTechImage src="./assets/rust.png" alt="Rust is a systems programming language that runs very quickly" />
                <YoroiTechBlockTitle>
                  <YoroiTechLink>
                    {formatMessage({ id: 'home.technologies.tech1-title' })}
                    <Arrow className="fa fa-arrow-right" />
                  </YoroiTechLink>
                </YoroiTechBlockTitle>
                <YoroiTechBlockContainer>
                  <YoroiTechBlockContainerText>{formatMessage({ id: 'home.technologies.tech1-text' })}</YoroiTechBlockContainerText>
                </YoroiTechBlockContainer>
              </YoroiTechBlockInnerWhite>
            </a>
          </YoroiTechBlock>
          <div style={{ flex: 0.30 }} />
          <YoroiTechBlock>
            <a target="_blank" href="https://github.com/nodejs">
              <YoroiTechBlockInnerWhite>
                <YoroiTechImage src="./assets/nodejs2.png" alt="Node.js is an open source" />
                <YoroiTechBlockTitle>
                  <YoroiTechLink >
                    {formatMessage({ id: 'home.technologies.tech2-title' })}
                    <Arrow className="fa fa-arrow-right" />
                  </YoroiTechLink>
                </YoroiTechBlockTitle>
                <YoroiTechBlockContainer>
                  <YoroiTechBlockContainerText>{formatMessage({ id: 'home.technologies.tech2-text' })}</YoroiTechBlockContainerText>
                </YoroiTechBlockContainer>
              </YoroiTechBlockInnerWhite>
            </a>
          </YoroiTechBlock>
          <div style={{ flex: 0.30 }} />
          <YoroiTechBlock>
            <a target="_blank" href="https://github.com/webassembly">
              <YoroiTechBlockInnerWhite>
                <YoroiTechImage src="./assets/webassembly.png" alt="WebAssembly is a binary instruction format for a stack-based virtual machine" />
                <YoroiTechBlockTitle>
                  <YoroiTechLink>
                    {formatMessage({ id: 'home.technologies.tech3-title' })}
                    <Arrow className="fa fa-arrow-right" />
                  </YoroiTechLink>
                </YoroiTechBlockTitle>
                <YoroiTechBlockContainer>
                  <YoroiTechBlockContainerText>{formatMessage({ id: 'home.technologies.tech3-text' })}</YoroiTechBlockContainerText>
                </YoroiTechBlockContainer>
              </YoroiTechBlockInnerWhite>
            </a>
          </YoroiTechBlock>
          <div style={{ flex: 0.30 }} />
          <YoroiTechBlock>
            <a target="_blank" href="https://github.com/input-output-hk/cardano-sl">
              <YoroiTechBlockInnerWhite>
                <YoroiTechImage src="./assets/cardano.png" alt="Cardano is a third-generation blockchain platform evolved out of a scientific philosophy" />
                <YoroiTechBlockTitle>
                  <YoroiTechLink>
                    {formatMessage({ id: 'home.technologies.tech4-title' })}
                    <Arrow className="fa fa-arrow-right" />
                  </YoroiTechLink>
                </YoroiTechBlockTitle>
                <YoroiTechBlockContainer>
                  <YoroiTechBlockContainerText>{formatMessage({ id: 'home.technologies.tech4-text' })}</YoroiTechBlockContainerText>
                </YoroiTechBlockContainer>
              </YoroiTechBlockInnerWhite>
            </a>
          </YoroiTechBlock>
        </YoroiTechBlocks>
        <YoroiTechBlocksLarge style={{ marginTop: '40px' }}>
          <YoroiTechBlockLarge>
            <a target="_blank" href="https://github.com/Emurgo/yoroi-frontend">
              <YoroiTechBlockWhiteLarge>
                <YoroiTechBlockWhiteLargeFlex >
                  <TechFlex style={{marginLeft: '-30px'}}>
                    <img style={{ width: '130px' }} src="./assets/yoroi-logo-symbol.svg" alt="Yoroi - We believe in the spirit of open source" />
                  </TechFlex>
                  <YoroiTechBlockContainerFlex>
                    <YoroiTechPad>
                      <YoroiRoadBlockTitleRel style={{marginTop: '-85px'}}>
                        <YoroiTechLinkLarge >
                          {formatMessage({ id: 'home.technologies.tech5-title' })}
                          <img style={{paddingTop: '23px', marginLeft: '23px'}} src='./assets/arrow-link-white.svg'></img>
                        </YoroiTechLinkLarge>
                      </YoroiRoadBlockTitleRel>
                      <YoroiTechBlockContainerNoLPad>
                        <YoroiTechBlockContainerTextL>
                          <FormattedHTMLMessage id="home.technologies.tech5-text" />
                        </YoroiTechBlockContainerTextL>
                      </YoroiTechBlockContainerNoLPad>
                    </YoroiTechPad>
                  </YoroiTechBlockContainerFlex>
                </YoroiTechBlockWhiteLargeFlex>
                <YoroiTechBlueBackground />
              </YoroiTechBlockWhiteLarge>
            </a>
          </YoroiTechBlockLarge>
          <div style={{ flex: 0.15 }} />
          <YoroiTechBlockLarge style={{marginLeft: '60px'}} > 
            <a target="_blank" href="https://github.com/input-output-hk/cardano-sl">
              <YoroiTechBlockWhiteLarge >
                <YoroiTechBlockWhiteLargeFlex>
                  <TechFlex>
                    <img style={{ width: '129px' }} src="./assets/Cardano_symbol_logo.svg" alt="Cardano is a decentralised public blockchain and cryptocurrency developed by IOHK" />
                  </TechFlex>
                  <YoroiTechBlockContainerFlex>
                    <YoroiTechPad>
                      <YoroiRoadBlockTitleRel style={{marginTop: '-40px'}}>
                        <YoroiTechLinkLarge>
                          {formatMessage({ id: 'home.technologies.tech6-title' })}
                          <img style={{paddingTop: '23px', marginLeft: '23px'}} src='./assets/arrow-link-white.svg'></img>                            </YoroiTechLinkLarge>
                      </YoroiRoadBlockTitleRel>
                      <YoroiTechBlockContainerNoLPad>
                        <YoroiTechBlockContainerTextL>{formatMessage({ id: 'home.technologies.tech6-text' })}</YoroiTechBlockContainerTextL>
                      </YoroiTechBlockContainerNoLPad>
                    </YoroiTechPad>
                  </YoroiTechBlockContainerFlex>
                </YoroiTechBlockWhiteLargeFlex>
                <YoroiTechBlueBackground />
              </YoroiTechBlockWhiteLarge>
            </a>
          </YoroiTechBlockLarge>
        </YoroiTechBlocksLarge>
      </Container>
    );

    const Technologies = inject('locale')(injectIntl(observer(_Technologies)));

    return <Technologies />;
  }
}

export default Technologies;
