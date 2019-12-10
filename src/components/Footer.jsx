import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './../css';
import OutsideClickHandler from 'react-outside-click-handler';

const ContainerFooter = styled.div`
  color: white;
	background: linear-gradient(41deg, #0C4146 0%, #48A1B0 100%);
  height: 187px;
`;


const FooterText = styled.div`
  flex:0.7;
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 13px;
  font-weight:200;

  @media(max-width:400px){
      display:none;
    }

`;

const RowContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 14px; 
`;


const LogoSize = styled.div`
  flex: 4;
`;

const Logo = styled.img`
  font-size: 1.5em;
`;

const LinkS = styled.div`
  flex: 0.8;
  font-size: 15px;
  a{
    text-decoration:none;
    color:white;
  }

  @media(max-width:400px){
    display:none;
  }
  `
const ContainerHeight = styled.div`
  display:flex;
  height:100%;
  width:1097px;
  margin:0 auto;
  flex-direction:column;
  justify-content:center;
`;

const Selector = styled.div`

  position: relative;
  /*Don't really need this just for demo styling*/
  outline:none;
  margin:0;

  @media(max-width:400px){
    display:none;
  }
  
  select{
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  max-width: 90px;
  padding-right:15px;
  font-size: 16px;
  background:transparent;
  border:none;
  color:white;
  margin:0;

  }

  &:after{
    content: '\f078';
    font: normal normal normal 17px/1 FontAwesome;
    color: white;
    right: 11px;
    bottom:1;
    position: absolute;
    pointer-events: none;
    margin:0; 
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDownloadDropdown: false,
    };
  }

  closePopUp = () => {
    this.setState({ show: false });
  };

  /* Single page app - scroll to top, to look like a normal webpage */
  scroll = () => {
    window.scrollTo(0, 0);
  };

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };

  render() {
    const _Footer = ({ intl: { formatMessage } }) => (
      <ContainerFooter >
        <ContainerHeight>
          <RowContainer>
            <LogoSize>
              <Logo src="./assets/testAssets/svg/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </LogoSize>
            <LinkS onClick={scroll}>
              <Link to="/about">{formatMessage({ id: 'header.about' })}</Link>
            </LinkS>
            <LinkS onClick={scroll} style={{ flex: 0.5 }}>
              <Link to="/faq/1">{formatMessage({ id: 'header.blog' })}</Link>
            </LinkS>
            <LinkS onClick={scroll}>
              <Link to="/support">{formatMessage({ id: 'header.contact' })}</Link>
            </LinkS>
            <Selector>
              <select
                style={{ marginTop: '-12px' }}
              // value={locale.value}
              // onChange={event => (locale.value = event.target.value)}
              >
                <option style={{ color: '#4A5065' }} value="en">Eng</option>
                <option style={{ color: '#4A5065' }} value="ja">日本語</option>

              </select>
            </Selector>
          </RowContainer>


          <RowContainer style={{ paddingTop: '29.74px', }}>
            <FooterText>
              {formatMessage({ id: 'footer.all-rights' })}
            </FooterText>
            <a className='links links-flex' target='_blank' href="https://www.facebook.com/Yoroi-wallet-399386000586822/" rel='noopener'>
              <img src="./assets/facebook.svg" />
            </a>
            <a className='links' target='_blank' href="https://twitter.com/YoroiWallet" rel='noopener'>
              <img src="./assets/twitter.svg" />
            </a>
            <a className='links' target='_blank' href="https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ" rel='noopener'>
              <img src="./assets/youtube.svg" />
            </a>
            <a className='links' target='_blank' href="https://medium.com/@emurgo_io" rel='noopener'>
              <img src="./assets/medium-size.svg" />
            </a>
            <a className='links' target='_blank' href="https://www.reddit.com/r/cardano/" rel='noopener'>
              <img src="./assets/reddit.svg" />
            </a>
            <a className='links' target='_blank' href="https://www.linkedin.com/company/emurgo_io" rel='noopener'>
              <img src="./assets/linkedin.svg" />
            </a>

          </RowContainer>
        </ContainerHeight>
      </ContainerFooter>
    );

    const Footer = inject('locale')(injectIntl(observer(_Footer)));

    return <Footer />;
  }
}

export default App;
