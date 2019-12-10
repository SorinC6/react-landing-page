import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link, NavLink } from 'react-router-dom';
import { HamburgerSpin } from "react-animated-burgers";
import styled, { keyframes } from 'styled-components';
import { Container } from './../css';
import { slideInLeft, slideOutLeft } from "react-animations";


const VTitleList = styled.div`
  margin: 4px;
  text-align: center;
  text-transform: uppercase;
 
  font-size: 15px;
  height: 24px;
  font-weight: 500;
  padding-bottom: 0.5px;      

  a{
    text-decoration: none;
    display: inline-block;
    height: 20px;
    color: #FFFFFF;	
    font-family: Rubik;	
    font-size: 14px;	
    font-weight: 500;	
    color:red;
    &:link,   
    &:visited{
      color: white;
    }
  }
  
`;


const HeaderText = styled.span`

  position: relative;
  color: white;
  display: flex;
  margin-top: 30px;
  /* width:1169px; */
  align-items: center;
  justify-content: space-between;
  z-index:1;
`;

const HContainer = styled.div`
  margin: 0 auto;
  max-width: 1115px;
  height: 88px;
`;


const Selector = styled.div`

  position: relative;
  outline:none;
  
  select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  max-width: 50px;
  padding-right:15px;
  font-size: 16px;
  background:transparent;
  border:none;
  color:white;
  margin:0;
  margin-top:0 !important;
  }

  &:after{
    content: '\f078';
    font: normal normal normal 17px/1 FontAwesome;
    color: white;
    right: 20px;
    left:50;
    position: absolute;
    pointer-events: none;
  }
`;

const NavigationItems = styled.div`
  width:336px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media(max-width:400px){
    display:none;
  }
`

const ImgWrapper = styled.div`
    position:relative;
    z-index:-100;
    top:-100;
    left:-200;
  
  img{
    background-repeat: no-repeat;
    background-size: contain;
    max-height:900px;
    width:1402px;
    /* width:100% */

  }
`

const HamburgerMenu = styled(HamburgerSpin)`
  position: absolute;
  right: 0;
  outline: none;
  display: none;
  @media (max-width: 400px) {
    display: block;
    color:white;

  }
`;

const slideInAnimation = keyframes`${slideInLeft}`;
const slideOutAnimation = keyframes`${slideOutLeft}`;

const MobileNavigation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  width: 100%;
  right:0;
  height: 100vh;
  padding-left:30px;
  top:40;
  background: white;
  opacity: 0.9;
  z-index: 2;
  animation : ${props => props.isActive ? `500ms ${slideInAnimation}` : `500ms ${slideOutAnimation}`};

  a {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: bold;
    color: #394e5d;
    text-decoration:none;
  }

  select{
    color:black
  }
  `


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      show: false,
    };
  }

  toggleButton = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    })
  }

  isThisHomePage() {
    return this.props.location.pathname === '/';
  }

  render() {

    // const offsetPaths = ['/about', '/faq', '/support', '/terms_and_conditions'];
    // const hasOffset = offsetPaths.some(r => window.location.href.match(r));
    const _Header = ({ locale, intl: { formatMessage } }) => (
      <HContainer>
        <Container>
          <HeaderText>
            <VTitleList>
              <Link to="/">
                <img
                  style={{ justifyContent: "flexStart", marginTop: '-6px' }}
                  src="./assets/testAssets/svg/EMURGOTEST-logo.svg"
                />
              </Link>
            </VTitleList>
            <NavigationItems>
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <NavLink to="/" exact>{formatMessage({ id: 'header.about' })}</NavLink>
              </VTitleList>
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <NavLink to="/about">{formatMessage({ id: 'header.blog' })}</NavLink>
              </VTitleList>
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <NavLink to="/faq/1">{formatMessage({ id: 'header.contact' })}</NavLink>
              </VTitleList>
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <Selector>
                  <select
                    style={{ marginTop: '-12px' }}
                    value={locale.value}
                    onChange={event => (locale.value = event.target.value)}
                  >
                    <option style={{ color: '#4A5065' }} value="en">Eng</option>
                    <option style={{ color: '#4A5065' }} value="ja">日本語</option>

                  </select>
                </Selector>
              </VTitleList>
            </NavigationItems>
            <HamburgerMenu isActive={this.state.show} toggleButton={this.toggleButton} />
            {this.state.show && (
              <MobileNavigation isActive={this.state.show}>
                <NavLink to="/" exact>{formatMessage({ id: 'header.about' })}</NavLink>
                <NavLink to="/about">{formatMessage({ id: 'header.blog' })}</NavLink>
                <NavLink to="/faq/1">{formatMessage({ id: 'header.contact' })}</NavLink>
                <Selector>
                  <select
                    value={locale.value}
                    onChange={event => (locale.value = event.target.value)}
                  >
                    <option style={{ color: '#4A5065' }} value="en">Eng</option>
                    <option style={{ color: '#4A5065' }} value="ja">日本語</option>

                  </select>
                </Selector>
              </MobileNavigation>
            )}

          </HeaderText>
        </Container>
        <ImgWrapper>
          <img src="./assets/testAssets/photos/start page.jpg" alt="header image" />
        </ImgWrapper>
      </HContainer>
    );

    const Header = inject('locale')(injectIntl(observer(_Header)));

    return <Header />;
  }
}
export default App;
