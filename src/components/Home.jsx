import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FormattedHTMLMessage } from 'react-intl';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

import { Container, ContainerGrey, Overflow, SectionTitle } from './../css';
import Roadmap from './Roadmap';
import Technologies from './Technologies';
import Collaborators from './Collaborators';

const MainTitle = styled.div`
  color: #FFFFFF;	
  font-family: Rubik;	
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubSubTitle = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

const MainText = styled.div`
  flex: 1;
`;

const MainImage = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
  height: 783px;
  width: 1003px;
  background-image: url('./assets/picture_simple.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -280px;
  margin-left: 242px;
`;

const Right = styled.div`
  @media (min-width: 700px) {
    margin: 130px 0 0 8%;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 280px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  @media (min-width: 700px) {
    margin: 130px 50% 0 0;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 320px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = styled.div`
  width: 320px;
  height: 300px;
`;

const SquareImage = styled.img`
  height: 330px;
  width: 350px;
`;

const SquareText = styled.div`
  flex: 1;
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
`;

const MainButtons = styled.div`
  display: flex;
  @media (min-width: 700px) {
    flex-direction: row;
    max-width: 410px;
    margin-top: 60px;
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

const DownloadB = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 10px;
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 2px 48px 0 #184dcf;
  padding-left: 8px;
  padding-right: 8px;
  background: #17d1aa;
  color: #ffffff;
  cursor: pointer;
  display: flow;
  flow-orientation: row;
  
  transition: all .2s;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadBChrome = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

const DownloadBChromeTextA = styled.div`
  text-transform: uppercase;
  font-size: 15px;
`;

const DownloadBChromeTextB = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
`;

const WatchVideo = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 190x;
    margin-top: 16px;
  }

  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin-right: 10px;
  border-radius: 8px;
  width: 190px;
  box-shadow: 0 2px 48px 0 #184dcf;
  padding-left: 8px;
  padding-right: 8px;

  border: solid 2px white;
  background: #ffffff00;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  transition: all .2s;
  &:hover{    
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const WatchVideoImage = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  margin-right: 10px;
  background: url('./assets/playbtn.svg') center no-repeat;
  border: 0;
`;

const WatchVideoText = styled.div`
  font-size: 15px;
`;

const YoroiInfo = styled.span`
  margin-right: none;
`;

const CheckMark = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  padding-bottom: 3px;
`;

const CheckMark2 = styled(CheckMark)`
  margin-left: 14px;
  padding-bottom: 3px;
`;

const EmurgoLogo = styled.img`
  margin-left: 6px;
  width: 115px;
`;

const ContainerBottom = styled(Container)`
  padding-bottom: 60px;
  max-height: 2400px;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  flex: 1;
  height: 49px;	
  width: 190px;	
  min-width: 160px;
  border-radius: 8px;	
  background-color: #17D1AA;	
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow:hidden;
  &:hover{
    background-color: #14E2B8;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #17d1aa;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 8px;	
  z-index: 3;
  
  margin-bottom: 5px;
  overflow: auto;
  text-transform:initial;
  text-align: justify;
  width: 190px;

  a {
    background-color: #17d1aa;
    padding: 5px 5px;
    display: block;
    font-size: 14px;
    
  }
  a:hover {
    background-color: #14E2B8
  }
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

  :hover ${DropdownButton} {
    background-color: #14E2B8;
    align-items:left;
  }
`;

const DownloadItemImage = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
`;

const DownloadLabel = styled.div`
  margin-left: 15px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  text-transform: uppercase;
`;

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
          <Overflow style={{marginTop: '94px', marginLeft: '-37px'}}>
            <MainText>
              <MainTitle>
                <YoroiInfo>
                  <FormattedHTMLMessage id={'home.title.Yoroi'} />
                </YoroiInfo>
              </MainTitle>
              <SubTitle>
                {formatMessage({id: 'home.title.YoroiDescription'})}
              </SubTitle>
              <SubSubTitle>
                By <EmurgoLogo src="./assets/emurgo_logo.png" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" border="0" />
              </SubSubTitle>
              <MainButtons>
                <Download style={{marginRight: '20px'}}>
                  <DropdownButton onClick={this.showDropdownMenu}>
                    <DownloadLabel>{formatMessage({id: 'header.download'})}</DownloadLabel>
                    <img
                      style= {{marginLeft:'158px', marginTop: '-31px'}}
                      src="./assets/arrow down.svg"
                    />
                  </DropdownButton>
                  { this.state.showDownloadDropdown &&
                    <OutsideClickHandler onOutsideClick={this.hideDropdownMenu}>
                      <DropdownContent>
                        <a
                          rel="noopener"
                          target= '_blank'
                          href= "https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb"
                        >
                          <DownloadItemImage
                            style={{  width: '16px', height: '16px', marginLeft: '5px', marginRight: '10px' }}
                            src="./assets/chrome.svg"
                          />
                          {formatMessage({id: 'download.mainnet.chrome'})}
                        </a>
                        <a
                          rel="noopener"
                          target= '_blank'
                          href= "https://chrome.google.com/webstore/detail/yoroi-shelley-testnet/bioklcnnnpdblghplkifbemcigeanmjn"
                        >
                          <DownloadItemImage
                            style={{  width: '16px', height: '16px', marginLeft: '5px', marginRight: '10px' }}
                            src="./assets/chrome.svg"
                          />
                          {formatMessage({id: 'download.testnet.chrome'})}
                        </a>                        
                        <a
                          rel="noopener"
                          target= '_blank'
                          href="https://addons.mozilla.org/en-US/firefox/addon/yoroi/"
                        >
                          <DownloadItemImage src="./assets/firefox.svg" />
                          {formatMessage({id: 'download.mainnet.firefox'})}
                        </a>
                        <a
                          rel="noopener"
                          target= '_blank'
                          href="https://addons.mozilla.org/en-US/firefox/addon/yoroi-shelley-testnet/"
                        >
                          <DownloadItemImage src="./assets/firefox.svg" />
                          {formatMessage({id: 'download.testnet.firefox'})}
                        </a>                        
                        <a
                          rel="noopener"
                          target= '_blank'
                          href="https://play.google.com/store/apps/details?id=com.emurgo&hl=en"
                        >
                          <DownloadItemImage src="./assets/google-play.svg" />
                          {formatMessage({id: 'download.mainnet.android'})}
                        </a>
                        <a
                          rel="noopener"
                          target= '_blank'
                          href="https://apps.apple.com/us/app/emurgos-yoroi-cardano-wallet/id1447326389"
                        >
                          <DownloadItemImage src="./assets/apple.svg" />
                          {formatMessage({id: 'download.mainnet.ios'})}
                        </a>
                      </DropdownContent>
                    </OutsideClickHandler>
                  }
                </Download>
                <WatchVideo onClick={this.openVideo} style={{marginTop: '-7px'}}>
                  <span>
                    <WatchVideoImage />
                  </span>
                  <div style={{ width: '140px'}}>
                    <WatchVideoText> {formatMessage({ id: 'home.title.watch-the-video' })} </WatchVideoText>
                  </div>
                </WatchVideo>
              </MainButtons>
            </MainText>
          </Overflow>
          <MainImage/>
          <Left>
            <SquareText style={{marginLeft: '502px'}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.secure' })}</SquareTextTitle>
              <SquareTextText >
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.secure-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.secure-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{marginLeft: '150px'}}>
              <SquareImage src="./assets/icon_secure.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </square>
          </Left>
          <Right>
            <square>
              <SquareImage src="./assets/icon_fast.svg" alt="Yoroi - Fast Our innovation" />
            </square>
            <SquareText style={{marginLeft: '190px'}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.fast' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.fast-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.fast-text' })}
              </SquareTextText>
            </SquareText>
          </Right>
          <Left>
            <SquareText style={{marginLeft: '502px'}}>
              <SquareTextTitle>{formatMessage({ id: 'home.properties.simple' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.simple-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.simple-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{marginLeft: '150px'}}>
              <SquareImage src="./assets/icon_simple.svg" alt="Yoroi - Simple Our passion" />
            </square>
          </Left>
        </ContainerBottom>
        <Collaborators />
        <Roadmap />
        <Technologies />
      </span>
    );

    const Home = inject('locale')(injectIntl(observer(_Home)));

    return <Home />;
  }
}

export default App;
