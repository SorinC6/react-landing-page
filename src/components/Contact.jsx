import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';



const Root = styled.div`
  max-width:1400px;
  display:flex;
  flex-direction:column;

  text-align:center;
  margin:0 auto;

`

const SectionTitleWrapper = styled(SectionTitle)`
  color: #215F68;	
  font-family: Rubik;	
  font-size: 24px;	
  font-weight: bold;

`

const Main = styled.div`
  display:flex;
  height:632px;
`

const LeftSide = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;
  width:700px;
  height:632px;

  p:nth-of-type(1){
    color: #1D1E21;	
    font-family: Rubik;	
    font-size: 18px;
    font-weight:200;
  }

  input{
    width:80%;
    padding:20px;
  }

  textarea{
    width:80%;
    padding:20px;
    height:150px;

  }

  input,textarea{
    &::placeholder{
      opacity: 0.5;	
      color: #8C8C8C;	
      font-family: Rubik;	
      font-size: 14px;
    }

    border: 1px solid #215F68;	
    border-radius: 2px;


  }

  button{
    width:200px;
    padding:20px;
    border: 2px solid #215F68;	
    border-radius: 2px;
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
    background:Transparent;
    font-family: Rubik;
    font-size: 14px;	
    font-weight: 500;	
    letter-spacing: 1.87px;
    color: #215F68;

    &:hover{
      cursor:pointer;
    }
  }
`
const RightSide = styled.div`
  flex:1;
  width:700px;
  height:632px;
  img{
    width:100%;
    height:100%;
  }

  @media(max-width:400px) {
    display:none;
  }
`

class Contact extends Component {
  render() {
    const _Contact = ({ intl: { formatMessage } }) => (
      <Root style={{ paddingBottom: '30px' }}>
        <SectionTitleWrapper style={{ paddingBottom: '10px' }}>{formatMessage({ id: 'home.contact.title' })}</SectionTitleWrapper>
        <Main>
          <LeftSide>
            <p>{formatMessage({ id: 'home.contact.formTitle' })}</p>
            <input placeholder={formatMessage({ id: 'home.contact.namePlaceholder' })} />
            <input placeholder={formatMessage({ id: 'home.contact.emailPlaceholder' })} />
            <p>{formatMessage({ id: 'home.contact.formHelp' })}</p>
            <textarea placeholder={formatMessage({ id: 'home.contact.textarea' })} />
            <button>{formatMessage({ id: 'home.contact.buttonText' })}</button>
          </LeftSide>
          <RightSide>
            <img src="./assets/testAssets/photos/Contact us.jpg" alt="" />
          </RightSide>
        </Main>
      </Root>
    );

    const Contact = inject('locale')(injectIntl(observer(_Contact)));

    return <Contact />;
  }
}

export default Contact;