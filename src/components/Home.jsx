import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FormattedHTMLMessage } from 'react-intl';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

import { Container, ContainerGrey, Overflow, SectionTitle, Section } from './../css';
import Roadmap from './Roadmap';
import Blog from './BlogList';
import Collaborators from './Collaborators';
import Contact from './Contact'

const MainTitle = styled.div`
  color: #FFFFFF;	
  font-family: Rubik;	
  max-width:699px;
  font-size: 62px;	
  font-weight: bold;	
  line-height: 72px;
  letter-spacing: 2px;
`;

const SubTitle = styled.div`
  height: 24px;	
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 20px;	
  line-height: 24px;
  margin-top: 18px;
  margin-bottom: 25px;
`;

const SubSubTitle = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-top: 6px;
  display: flex;
  align-items: center;
  

  @media(max-width:700px){
    justify-content: center; 
  }
`;

const MainText = styled.div`
  flex: 1;
  margin-top:110px;
`;



const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    margin: 130px 0 0 8%;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 280px;
    flex-direction:column;
  }
`;

const Left = styled.div`
  @media (min-width: 700px) {
    margin: 130px 50% 0 0;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 320px;
  }
  @media (max-width: 400px) {
    max-width:90%;
  }
    color:red;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const SquareImage = styled.img`
  height: 330px;
  width: 350px;
`;

const SquareText = styled.div`
  flex: 1;
  @media(max-width:400px){
    width:90%;
  }
`;

const SquareTextTitle = styled.div`
  height: 36px;	
  width: 98px;	
  color: #353535;	
  font-family: Rubik;	
  font-size: 30px;	
  line-height: 36px;
  margin-bottom: 20px;
`;

const SquareTextText = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  line-height: 28px;
  height: 168px;
  width: 400px;

  @media(max-width:400px){
    max-width:300px;
    text-align: justify;
    text-justify: inter-word;
  }
  
`;

const MainButtons = styled.div`
  display: flex;
  @media (min-width: 700px) {
    flex-direction: row;
    max-width: 410px;
    margin-top: 44px;
  }
  @media (max-width: 700px) {
    margin-top: 40px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
`;


const WatchVideo = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 190px;
    margin-top: 30px !important;
  }

  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin-right: 10px;
  border:3px solid white;
  background-color: transparent;
  width: 190px;

  padding-left: 8px;
  padding-right: 8px;

  border: solid 3px white;
  background: #ffffff00;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  
`;

const WatchVideoImage = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  margin-right: 10px;
  border-radius:50%;
  background: url('./assets/playbtn.svg') center no-repeat;
  border: 0;
`;

const WatchVideoText = styled.div`
  font-size: 15px;
`;

const YoroiInfo = styled.span`
  margin-right: none;
  font-family: Rubik;	
  font-size: 62px;	
  font-weight: bold;
`;


const EmurgoLogo = styled.img`
  margin-left: 6px;
  width: 115px;
`;

const ContainerBottom = styled(Container)`
  padding:0;
  margin:0 auto;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  flex: 1;
  text-align:center;
  height: 49px;	
  width: 190px;	
  min-width: 160px;
  border:3px solid white;
  background-color: transparent;	
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow:hidden;

`;


const Download = styled.div`
  position: relative;
  display: inline-block;
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 15px;	
  font-weight: initial;	
  line-height: 40px; 
  flex: 0.8;

`;



const DownloadLabel = styled.div`
  margin-left: 15px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  text-transform: uppercase;
`;

const ImgWrapper = styled.img`
  /* width:100%; */
  margin:0 auto;
  width: 100%;
  margin-top:100px;

  @media(max-width:400px) {
    display:none; 
  }
`



/**
 *  This Component is to be able to pass isOpen
 *  to ModalVideo. Example did not work as intenteded:
 *  Prop was passed by isOpen={this.state.video} but
 *  not binded to state isOpen.
 */
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
      showSupportModal: false,
      showDownloadDropdown: false,
    };
    this.openVideo = this.openVideo.bind(this);
  }

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };
  openVideo() {
    this.setState({ video: true });
  }

  render() {
    const _Home = ({ intl: { formatMessage } }) => (
      <span>
        <ContainerBottom>
          <Video isOpen={this.state.video} channel="youtube" videoId="DHtEgLMslIQ" onClose={() => this.setState({ video: false })} />
          <Overflow style={{ marginTop: '94px' }}>
            <MainText>
              <MainTitle>
                <YoroiInfo>
                  <FormattedHTMLMessage id={'home.title.Yoroi'} />
                </YoroiInfo>
              </MainTitle>
              <SubTitle>
                {formatMessage({ id: 'home.title.YoroiDescription' })}
              </SubTitle>
              <SubSubTitle>
                <span>By</span> <EmurgoLogo src="./assets/emurgo_logo.png" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" border="0" />
              </SubSubTitle>
              <MainButtons>
                <Download style={{ marginRight: '20px' }}>
                  <DropdownButton onClick={this.showDropdownMenu}>
                    <DownloadLabel>{formatMessage({ id: 'header.download' })}</DownloadLabel>
                  </DropdownButton>

                </Download>
                <WatchVideo onClick={this.openVideo} style={{ marginTop: '-7px' }}>
                  <span>
                    <WatchVideoImage />
                  </span>
                  <div style={{ width: '140px' }}>
                    <WatchVideoText> {formatMessage({ id: 'home.title.watch-the-video' })} </WatchVideoText>
                  </div>
                </WatchVideo>
              </MainButtons>
            </MainText>
          </Overflow>
          <div ></div>
          <h2 style={{
            textAlign: "center", marginTop: "400px"
          }}>{formatMessage({ id: 'header.about' })}</h2>
          <Left>
            <SquareText style={{ marginLeft: '502px' }}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.secure' })}</SquareTextTitle>
              <SquareTextText >
                <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.secure-text-highlight' })}</span><br />
                {formatMessage({ id: 'home.properties.secure-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{ marginLeft: '150px' }}>
              <SquareImage src="./assets/icon_secure.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </square>
          </Left>
          <Right>
            <square>
              <SquareImage src="./assets/icon_fast.svg" alt="Yoroi - Fast Our innovation" />
            </square>
            <SquareText style={{ marginLeft: '190px' }} >
              <SquareTextTitle >{formatMessage({ id: 'home.properties.fast' })}</SquareTextTitle>
              <SquareTextText>
                <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.fast-text-highlight' })}</span><br />
                {formatMessage({ id: 'home.properties.fast-text' })}
              </SquareTextText>
            </SquareText>
          </Right>
          <Left>
            <SquareText style={{ marginLeft: '502px' }}>
              <SquareTextTitle>{formatMessage({ id: 'home.properties.simple' })}</SquareTextTitle>
              <SquareTextText>
                <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.simple-text-highlight' })}</span><br />
                {formatMessage({ id: 'home.properties.simple-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{ marginLeft: '150px' }}>
              <SquareImage src="./assets/icon_simple.svg" alt="Yoroi - Simple Our passion" />
            </square>
          </Left>
          <ImgWrapper src="./assets/testAssets/photos/Developer.jpg" />
          <Collaborators />
        </ContainerBottom>
        <Blog />
        <Contact />
      </span>
    );

    const Home = inject('locale')(injectIntl(observer(_Home)));

    return <Home />;
  }
}

export default App;
