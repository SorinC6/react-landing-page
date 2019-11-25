import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container, ContainerBlue } from './../css';
import './../css/custom.css';
import TitleIconBlock from './TitleIconBlock';
import supportIconSVG from '../assets/support.svg';

const SectionB = styled.div``;

const SectionC = styled.div``;

// YOROI ROADMAP
const YoroiRoadMapBlocks = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 700px) {
    flex-direction: row;
    
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const YoroiRoadMapBlockLarge = styled.div`
  text-align: center;
  @media (min-width: 700px) {
    width: 524px;
  }

  @media (max-width: 700px) {
  }
`;

const YoroiRoadBlockWhiteLargeFlex = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TechFlex = styled.div`
  flex: 0.5;
  @media (max-width: 700px) {
    max-width: 159px;
  }
`;

const YoroiTechLink = styled.a`
  font-size: 20px;
  text-decoration: none;
`;

const YoroiTechLinkLarge = styled(YoroiTechLink)`
  color: #FFFFFF;
  position: relative;
  font-size: 25px;
  line-height: 28px;
  height: 28px;
  
`;

const YoroiRoadBlock = styled.div`
  width: 210px;
  border-radius: 20px;
  background-color: #f4f4f7;
  margin: 0 auto;
`;

const YoroiRoadBlockWhite = styled(YoroiRoadBlock)`
  background-color: white;
`;

const YoroiRoadBlockWhiteLarge = styled(YoroiRoadBlockWhite)`
  overflow: hidden;
  height: 290px;
  box-shadow: 0 2px 40px 0 rgba(229, 229, 229, 0.5);

  @media (min-width: 700px) {
    width: 524px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const YoroiRoadBlockContainer = styled.div`
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
  color: #847e7e;
  padding-bottom: 20px;
`;

const YoroiRoadBlockContainerFlex = styled(YoroiRoadBlockContainer)`
  flex: 1;
`;

const YoroiRoadBlockTitle = styled.div`
  font-size: 24px;
  padding-top: 10px;
  color: #3f60f5;
  display: flex;
  align-items: center;
`;

const YoroiTechPad = styled.div`
  padding-left: 40px;
`;

const YoroiRoadBlockContainerNoLPad = styled.div`
  text-align: left;
  padding-left: 0px;
  padding-right: 10px;
  font-size: 13px;
  color: #847e7e;
  padding-bottom: 20px;
`;

const YoroiTechBlockContainerTextL = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #FFFFFF;  
  text-align: left;
  line-height: 22px;
  height: 44px;
  width: 185px;
  position: relative;
`;

const YoroiTechBlueBackground = styled.div`
  border-radius: 30px;
  background-image: linear-gradient(to right, #1850d7, #4763fb 20%);
  width: 400px;
  height: 400px;
  z-index: 1;
  transform: rotate(-10deg);
  top: -396px;
  @media (min-width: 700px) {
    right: 228px;
  }
  @media (max-width: 700px) {
    right: 258px;
  }
  position: relative;
  box-shadow: 0 2px 40px 0 rgba(179, 179, 179, 0.5);
`;

const NumberBox = styled.div`
  width: 47px;
  height: 47px;
  transform: rotate(-10deg);
  border-radius: 11px;
  background-image: linear-gradient(to right, #1850d7, #4763fb);
  text-align: center;
  color: #ffffff;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberBoxR = styled.div`
  transform: rotate(10deg);
`;

const CheckTheFaqTitle = styled.div`
  color: #353535;
  font-size: 24px;
  margin-left: 20px;
`;

const CheckTheFaqText = styled.div`
  color: #847e7e;
  font-size: 14px;
  margin-left: 70px;
`;

const SupportTitle = styled.div`
  color: #353535;
  font-size: 30px;
  padding-bottom: 40px;
`;

const SupportSubtitle = styled.div`
  color: #353535;
  font-size: 14px;
  padding-bottom: 40px;
`;

const SupportFaq = styled.div`
  display: flex;

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    padding-bottom: 48px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const SupportFaqBlock = styled(Link)`
  flex: 1;

  @media (min-width: 700px) {
  }

  @media (max-width: 700px) {
    padding-bottom: 48px;
  }
`;

const FAQList = styled.div`
  padding-bottom: 2px;
`;

const Arrow = styled.i`
  font-size: 12px;
  margin-left: 9px;
  font-weight: 100;
  position: relative;
  top: -3px;
`;

const Oval = styled.div`
  height: 99px;
  width: 99px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.1);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FAQButton = styled.div`
  height: 51px;
  width: 146px;
  border-radius: 8px;
  background-color: #17D1AA;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flow;
  box-shadow: 0 2px 48px 0 #184DCF;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  } 
`; 

const NeedSupport = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
  align-items: center;
  justify-content: center;
  height: 51px;
  padding: 15px;
  margin-right: 10px;
  border-radius: 8px;
  width: 146px;
  box-shadow: 0 2px 48px 0 #184DCF;
  padding-left: 8px;
  padding-right: 8px;
  background: #17d1aa;
  color: #ffffff;
  cursor: pointer;
  display: flow;
  flow-orientation: row;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  transition: all .2s;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSupportModal: false,
    };
  }

  loadScript(src, id) {
    const script = document.createElement('script');
    script.src = src;
    if (id) {
      script.id = id;
    }

    script.addEventListener('load', function () {
      console.log(`SCRIPT LOADED : ${script.src}`);
    });
    script.addEventListener('error', function (e) {
      console.log(`SCRIPT LOAD ERROR : ${e.message}`);
    });
    document.body.appendChild(script);
  }

  componentWillMount() {
    // Start of iohk Zendesk Widget script -->
    this.loadScript('https://static.zdassets.com/ekr/snippet.js?key=116e895c-fb80-48b8-944b-dba17273a512', 'ze-snippet');
    // End of iohk Zendesk Widget script <--
  }

  render() {
    const _Support = ({ intl: { formatMessage } }) => (
      <span>
        <Container>
          <TitleIconBlock icon={supportIconSVG} />
          <div>
              <div style={{paddingBottom: '13px', paddingTop: '15px', marginLeft: '44.45%', height: '36px', lineHeight: '36px', fontSize: '30px', color: '#244BC0', fontWeight: 'bold'}}>{formatMessage({ id: 'header.support' })}</div>
              <div style={{paddingBottom: '16px', fontSize: '14px', lineHeight: '22px',  textAlign: 'center'}}>{formatMessage({id: 'For a faster response, check '})}<Link style={{textDecoration: 'none', color: '#244BC0'}} onClick={this.toggleMenu} to="/faq/1">{formatMessage({ id: 'FAQ page' })}</Link></div>
          </div>
          </Container>
          <Container style={{maxWidth: '146px', paddingBottom: '146px'}}>
          <Link style={{textDecoration: 'none'}} onClick={this.toggleMenu} to="/faq/1">
            <FAQButton to="/faq/1" style={{color: '#FFFFFF', fontSize: '15px', fontWeight: '500'}}>FAQ</FAQButton>
          </Link>
        </Container>
        <SectionC style={{paddingBottom: '53px' }}>
          <Container style={{ paddingLeft: '0' }}>
            <div style={{ width: '100%', textAlign: 'center', fontSize: '32px', paddingBottom: '48px' }}>
              {formatMessage({ id: 'support.community' })}
            </div>
            <YoroiRoadMapBlocks style={{marginLeft: '-40px'}}>
              <YoroiRoadMapBlockLarge>
                <YoroiRoadBlockWhiteLarge>
                  <YoroiRoadBlockWhiteLargeFlex>
                    <TechFlex>
                      <img src="./assets/telegram.svg" height="90" width="90" />
                    </TechFlex>
                    <YoroiRoadBlockContainerFlex>
                      <YoroiTechPad>
                        <YoroiRoadBlockTitle>
                          <YoroiTechLinkLarge target="_blank" href="https://t.me/CardanoCommunityTechSupport">
                            {formatMessage({ id: 'support.visit-1' })} <Arrow className="fa fa-arrow-right" />
                          </YoroiTechLinkLarge>
                        </YoroiRoadBlockTitle>
                        <YoroiRoadBlockContainerNoLPad>
                          <YoroiTechBlockContainerTextL>{formatMessage({ id: 'support.visit-1-text' })}</YoroiTechBlockContainerTextL>
                        </YoroiRoadBlockContainerNoLPad>
                      </YoroiTechPad>
                    </YoroiRoadBlockContainerFlex>
                  </YoroiRoadBlockWhiteLargeFlex>
                  <YoroiTechBlueBackground style={{right: '-195px', top: '-280px'}}/>
                </YoroiRoadBlockWhiteLarge>
              </YoroiRoadMapBlockLarge>
              <YoroiRoadMapBlockLarge style={{marginLeft: '66px'}}>
                <YoroiRoadBlockWhiteLarge>
                  <YoroiRoadBlockWhiteLargeFlex>
                    <TechFlex>
                      <img src="./assets/forum.svg" height="90" width="90" />
                    </TechFlex>
                    <YoroiRoadBlockContainerFlex>
                      <YoroiTechPad>
                        <YoroiRoadBlockTitle>
                          <YoroiTechLinkLarge target="_blank" href="https://forum.cardano.org/c/communitytechnicalsupport">
                            {formatMessage({ id: 'support.visit-2' })} <Arrow className="fa fa-arrow-right" />
                          </YoroiTechLinkLarge>
                        </YoroiRoadBlockTitle>
                        <YoroiRoadBlockContainerNoLPad>
                          <YoroiTechBlockContainerTextL>{formatMessage({ id: 'support.visit-2-text' })}</YoroiTechBlockContainerTextL>
                        </YoroiRoadBlockContainerNoLPad>
                      </YoroiTechPad>
                    </YoroiRoadBlockContainerFlex>
                  </YoroiRoadBlockWhiteLargeFlex>
                  <YoroiTechBlueBackground style={{right: '-195px', top: '-280px'}}/>
                </YoroiRoadBlockWhiteLarge>
              </YoroiRoadMapBlockLarge>
            </YoroiRoadMapBlocks>
          </Container>
        </SectionC>
        <ContainerBlue style={{ paddingBottom: '40px', backgroundColor: '#F0F3F5', backgroundImage: 'none', height: '225px' }}>
          <Container style={{ display: 'flex', flexDirection: 'row', paddingTop: '40px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <SupportTitle style={{paddingBottom: '11px'}}>{formatMessage({ id: 'support.contact-us' })}</SupportTitle>
              <SupportSubtitle>{formatMessage({ id: 'support.contact-us-text' })}</SupportSubtitle>
              <NeedSupport onClick={() => {
                if (typeof window.zE !== "undefined") {
                  window.zE.activate()
                }
              }}>{formatMessage({ id: "support.contact-us-btn" })}</NeedSupport>
            </div>
          </Container>
        </ContainerBlue>
      </span >
    );

    const Support = inject('locale')(injectIntl(observer(_Support)));

    return <Support />;
  }
}

export default App;
