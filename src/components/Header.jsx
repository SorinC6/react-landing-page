import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Container } from './../css';

import Plx from "react-plx";
import Download from './Download';

const data = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity"
      }
    ]
  },
  {
    start: 400,
    duration: 100,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
    ]
  },

];

const navFixed = {
  width: '100%',
  height: 60,
  backgroundImage: "linear-gradient(82deg,#1a44b7,#4760ff 30%)",
  color: "#fff",
  left: 0,
  top: 0,
  position: "fixed",
  zIndex: 10,
  
};

const Content = styled.div`  
  display: flex;
  max-width: 1115px;
  margin: 10px auto;
  a{
    padding-top: 5px;
    
  }
`;

const NavFixed = styled.div`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  line-height: 21px;
  font-size: 15px;
  height: 24px;
  font-weight: 500;
  margin: 5px;
  a{    
    display: inline-block;
    text-decoration: none;
    height: 23px;
    img{
      margin-top: -5px;
      margin-left: -65px
    }
    &.active{
      border-bottom: 2px solid white;
    }
    &:link,
    &:visited{
      color: white;
    }
  }
`;

const Logo = styled.img`
  font-size: 1.5em;
  text-align: center;
  max-width: 128px;
  height: 35px;
 
`;

const VTitleList = styled.div`
  flex: 1;
  margin: 4px;
  text-align: center;
  text-transform: uppercase;
 
  font-size: 15px;
  height: 24px;
  font-weight: 500;

  a{
    text-decoration: none;
    display: inline-block;
    height: 23px;
    
    &.active{
      border-bottom: 2px solid white;
      padding-bottom: 0.5px;      
    }

    &:link,   
    &:visited{
      color: white;
    }
  }
  
`;

/*
 * Background<A,B>
 *
 * @media rules
 * to move blue triangle header responsive
 * an correctly centered.
 *
 * .hasOffset is for different sections, that require
 * diffrent sizes.
 */
const Background = styled.div`
  position: relative;
  width: 2691px;
  height: ${p => (p.hasOffset ? '1062px' : '1035px')};

  @media (min-width: 700px) {
    height: ${p => (p.hasOffset ? '1062px' : '1035px')};
    top:  ${p => (p.hasOffset ? '-1275px' : '-900px')}; ;
    right: ${p => (p.hasOffset ? '640px' : '730px')}; 
  }
  @media (max-width: 700px) {
    height: ${p => (p.hasOffset ? '1062px' : '1035px')};
    top: -867px;
    right: 23px;
  }

  transform: skew(56deg, -31deg);
  border-radius: 30px;
  background-image: ${p => (p.hasOffset ? 'linear-gradient(82deg, #1a44b7, #4760ff 30%)' : 'linear-gradient(53.05deg, #1D45BA 0%, #1F47BC 6%, #2C51C7 55%, #3154CB 100%)')};
  z-index: -3;
`;

const BackgroundB = styled.div`
  position: relative;
  width: 2450px;
  height: ${p => (p.hasOffset ? '270px' : '912px')};
  border-radius: 30px;
  transform: skew(56deg, -31deg);
  background-image: ${p => (p.hasOffset ? 'linear-gradient(82deg, #3256C8, #4760ff 30%)' : 'linear-gradient(51.8deg, #3154CB 0%, rgba(49,84,203,0.97) 10%, rgba(49,84,203,0.87) 25%, rgba(49,84,203,0.71) 43%, rgba(49,84,203,0.49) 63%, rgba(49,84,203,0.21) 85%, rgba(49,84,203,0) 100%)')};
  z-index: -2;
  
  
  @media (min-width: 700px) {
    height: ${p => (p.hasOffset ? '926px' : '912px')};
    top:  ${p => (p.hasOffset ? '-2292px' : '-1880px')}; 
    right: ${p => (p.hasOffset ? '621px' : '680px')}; 
  }
  @media (max-width: 700px) {
    height: ${p => (p.hasOffset ? '926px' : '912px')};
    top:  ${p => (p.hasOffset ? '-696px' : '-933px')}; ;
    right: -31px;
  }
  
}
`;

const BackgroundC = styled.div`
  position: relative;
  width: 2100px;
  border-radius: 30px;
  transform: skew(56deg, -31deg);
  background: ${p => (p.hasOffset ? 'linear-gradient(27deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)' : 'linear-gradient(49.34deg, #4968D6 0%, rgba(69,101,212,0.95) 10%, rgba(59,92,207,0.81) 42%, rgba(52,87,204,0.73) 69%, rgba(50,85,203,0.7) 88%, rgba(50,85,203,0.61) 89%, rgba(49,84,203,0.44) 92%, rgba(49,84,203,0.31) 95%, rgba(49,84,203,0.23) 98%, rgba(49,84,203,0.2) 100%);')}; 
  z-index: -1;

  @media (min-width: 700px) {
    top: ${p => (p.hasOffset ? '-3090px' : '-2650px')};
    height: ${p => (p.hasOffset ? '727px' : '735px')};
    right: ${p => (p.hasOffset ? '480px' : '560px')};
  }

  @media (max-width: 700px) {
    top: ${p => (p.hasOffset ? '-3090px' : '-1343px')};
    height: ${p => (p.hasOffset ? '727px' : '736px')};
    right: 480px;
  }
`;

const HeaderText = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
  position: relative;
  color: white;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

const HContainer = styled.div`
  margin: 0 auto;
  max-width: 1115px;
  height: 88px;
`;


const Selector = styled.select`
  background: transparent;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: white;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  padding-left: 16px; 
  height: 48px;
  width: 182px;                
  cursor: pointer;
  &:hover{    
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
    
      }
`;

const HeaderAlt = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const HeaderAltSub = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  width: 100%;
  height: 200px;
  background-image: linear-gradient(82deg, #1a44b7, #4760ff 30%);
  position: absolute;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      show: false,
    };
  }

  isThisHomePage() {
    return this.props.location.pathname === '/';
  }

  render() {
    // Do not show Download on the home page
    const downloadVisibility = this.isThisHomePage() ? 'hidden' : 'visible';

    const offsetPaths = ['/about', '/faq', '/support', '/terms_and_conditions'];
    const hasOffset = offsetPaths.some(r => window.location.href.match(r));
    const _Header = ({ locale, intl: { formatMessage } }) => (
      <HContainer>
        <HeaderAltSub>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/">
              {formatMessage({ id: 'header.home' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/about">
              {formatMessage({ id: 'header.about' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/faq/1">
              {formatMessage({ id: 'header.faq' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/support">
              {formatMessage({ id: 'header.support' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Selector
              value={locale.value}
              onChange={event => (locale.value = event.target.value)}
            >
              <option value="en">ENGLISH</option>
              <option value="ja">日本語</option>
              {/* <option value="ko">한국어</option>
              <option value="zh-Hans">简体中文</option>
              <option value="zh-Hant">繁體中文</option>
              <option value="ru">Pусский</option> */}
            </Selector>
          </VTitleList>
        </HeaderAltSub>
        <Container>
          <HeaderAlt>
            <Logo  src="./assets/logo.png" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            <div style={{ flex: 1 }} />
            <a style={{ color: 'white', fontSize: '30px' }} href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
              <i className="fa fa-bars" />
            </a>
          </HeaderAlt>
          <HeaderText>
            <VTitleList>
              <Link to="/">
                <Logo style={{marginLeft: '-120px'}} src="./assets/logo.png" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
              </Link>
            </VTitleList>
            <div style={{ flex: 0.3 }} />
            <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
              <NavLink to="/" exact>{formatMessage({ id: 'header.home' })}</NavLink>
            </VTitleList>
            <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
              <NavLink to="/about">{formatMessage({ id: 'header.about' })}</NavLink>
            </VTitleList>
            <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
              <NavLink to="/faq/1">{formatMessage({ id: 'header.faq' })}</NavLink>
            </VTitleList>
            <VTitleList style={{ flex: 0.5, marginTop: '10px'}}>
              <NavLink to="/support">{formatMessage({ id: 'header.support' })}</NavLink>
            </VTitleList>
            <div style={{ flex: 0.3 }} />
            <VTitleList style={{zIndex: '15', visibility: `${downloadVisibility}` }} >
              <Download />
            </VTitleList>
            <div style={{ flex: 0.1 }} />
            <VTitleList style={{zIndex: '15'}}>
              <Selector
                style={{marginTop: '-12px'}}
                value={locale.value}
                onChange={event => (locale.value = event.target.value)}
              >
                <option style={{color: '#4A5065'}} value="en">ENGLISH</option>
                <option style={{color: '#4A5065'}} value="ja">日本語</option>
                {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                <option style={{color: '#4A5065'}} value="ru">Pусский</option> */}
              </Selector>
            </VTitleList>
            <Plx parallaxData={data} style={navFixed} >
              <Content>
                <NavFixed onClick={scroll}>
                  <Link to="/">
                    <Logo src="./assets/logo.png" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
                  </Link>
                </NavFixed>
                <div style={{ flex: 0.3, marginRight: '45px' }} />
                <NavFixed style={{ flex: 0.5 }} onClick={scroll}>
                  <NavLink to="/" exact>{formatMessage({ id: 'header.home' })}</NavLink>
                </NavFixed>
                <NavFixed style={{ flex: 0.5 }} onClick={scroll}>
                  <NavLink to="/about">{formatMessage({ id: 'header.about' })}</NavLink>
                </NavFixed>
                <NavFixed style={{ flex: 0.5 }} onClick={scroll}>
                  <NavLink to="/faq/1">{formatMessage({ id: 'header.faq' })}</NavLink>
                </NavFixed>
                <NavFixed style={{ flex: 0.5 }} onClick={scroll}>
                  <NavLink to="/support">{formatMessage({ id: 'header.support' })}</NavLink>
                </NavFixed>
                <div style={{ flex: 0.3 }} />
                <NavFixed  style={{zIndex: '15', visibility: `${downloadVisibility}` }} >
                  <Download />
                </NavFixed>
                <div style={{ flex: 0.1 }} />
                <NavFixed style={{marginRight: '35px', marginTop: '-5px'}}>
                  <Selector 
                    style={{marginRight: '7px'}}
                    value={locale.value}
                    onChange={event => (locale.value = event.target.value)}
                  >
                    <option style={{color: '#4A5065'}} value="en">ENGLISH</option>
                    <option style={{color: '#4A5065'}} value="ja">日本語</option>
                    {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                    <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                    <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                    <option style={{color: '#4A5065'}} value="ru">Pусский</option>  */}
                  </Selector>
                </NavFixed>
              </Content>
            </Plx>
          </HeaderText>
        </Container>
        <Background hasOffset={hasOffset} />
        <BackgroundB hasOffset={hasOffset} />
        <BackgroundC hasOffset={hasOffset} />
      </HContainer>
    );

    const Header = inject('locale')(injectIntl(observer(_Header)));

    return <Header />;
  }
}
export default App;
