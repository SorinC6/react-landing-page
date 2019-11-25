import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, ContainerB, ContainerBlue, OverflowS } from './../css';
import TitleIconBlock from './TitleIconBlock';
import aboutIconSVG from '../assets/about.svg';

const TitleTextBlock = styled.div`
  padding-top: 20px;
  margin-left: 45.45%;
  font-size: 30px;
  color: #244BC0;
  font-weight: bold;
  width: fit-content;
  text-align: center;
`;

const SectionAboutYoroi = styled(Container)`
  display: flex;
  flex-direction: row;
  padding-top: 73px;  
  align-items: center;
  justify-content: center;
  padding-bottom: 143px;
`;

const AboutYoroiTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  max-width: 700px;
`;

const AboutYoroiText = styled.div`
  padding-bottom: 30px;
  height: 38px;
  width: 400px;
  color: #353535;
  font-size: 32px;
`;

const AboutYoroiDescText = styled.div`
  color: #9B9B9B;
  font-size: 14px;
  width: 495px;
  line-height: 28px;
`;

const YoroiImage = styled.img`
  height: 670px;
  width: 670px;
  z-index: -1;
  margin-left: -40px;
`;

const SectionAboutEmurgo = styled(Container)`
  display: flex;
  
  @media (min-width: 700px) {
    flex-direction: row
  }
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const AboutEmurgoTextBlock = styled(Container)`
  justify-content: center;
  flex-direction: column; 
  display: flex;
 
  background-color: #F0F3F5;
  padding-left: 50px;
  padding-right: 474px;
  width: 960px;

  @media (min-width: 700px) {
    flex: 1,
  }
  @media (max-width: 1000px) {
  }
`;

const VideoTitle = styled.div`
  color: white;
  font-size: 30px;
  padding-bottom: 40px;
`;

const EmurgoLink = styled.div`
  a {
    height: 24px;
    text-decoration: none;
    color: #3154CB;	
    font-size: 14px;
   
    img {
      height: 13px;
      width: 13px;
      padding-left: 5px;
      margin-bottom: -2px;
    }  
  }
`;

class Video extends ModalVideo {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
    };
    this.openVideo = this.openVideo.bind(this);
  }

  openVideo() {
    this.setState({ video: true });
  }

  render() {
    const _About = ({ intl: { formatMessage } }) => (
      <span>
        <Video
          isOpen={this.state.video}
          channel="youtube"
          videoId="_ltQayKP5ek"
          onClose={() => this.setState({ video: false })}
        />        
        <Container>
          <TitleIconBlock icon={aboutIconSVG} />
          <TitleTextBlock >{formatMessage({ id: 'header.about' })}</TitleTextBlock>
        </Container>
        <SectionAboutYoroi>
          <AboutYoroiTextBlock>
            <AboutYoroiText>{formatMessage({ id: 'about.why-yoroi-title' })}</AboutYoroiText>
            <AboutYoroiDescText>{formatMessage({ id: 'about.why-yoroi-text' })}</AboutYoroiDescText>
          </AboutYoroiTextBlock>
          <YoroiImage src="./assets/about_samurai.png" />
        </SectionAboutYoroi>
        <SectionAboutEmurgo>
          <ContainerB style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black'}}>
            <div
              onClick={this.openVideo}  
              style={{
                backgroundImage: "url('./assets/emurgo_video.png')",
                opacity: '0.4',
                width: '960px',
                height: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <img src="./assets/playbtn.svg" style={{ width: '80px'}} />
            </div>
          </ContainerB>
          <AboutEmurgoTextBlock>
              <div style={{ color: '#353535', fontSize: '32px', paddingBottom: '30px', lineHeight: '38px' }}>{formatMessage({ id: 'about.the-meaning-title' })}</div>
              <div style={{color: '#353535', fontSize: '14px', lineHeight: '28px', height: '28px'}}>{formatMessage({id: "EMURGO Building a Global Cardano"})}</div>
              <div style={{ color: '#9B9B9B', fontSize: '14px', width: '486px', height: '86px', lineHeight: '28px', paddingBottom: '30px' }}>
                {formatMessage ({id: 'about.the-meaning-p1'})}
              </div>
              <br />
              <EmurgoLink>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://emurgo.io/"
                >
                  {formatMessage({ id: 'about.visit-the-website'})}
                  <img src='./assets/arrow-link.svg'/>
                </a>
              </EmurgoLink>
          </AboutEmurgoTextBlock>
        </SectionAboutEmurgo>
      </span>
    );

    const About = inject('locale')(injectIntl(observer(_About)));
    return <About />;
  }
}

export default App;
