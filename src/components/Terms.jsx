import React from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, OverflowS } from './../css';
import TermsOfUseText from './TermsOfUseText';
import TitleIconBlock from './TitleIconBlock';
import tocIconSVG from '../assets/terms-and-conditions.svg';

const TitleTextBlock = styled.div`
  padding-top: 20px;
  margin-left: 40%;  
  font-size: 30px;
  color: #244BC0;
  font-weight: bold; 
  width: 227px; 
  height: 72px;
  text-align: left;
`;

const SectionTOC = styled.div`
  margin-bottom: 40px;
  margin-top: 220px;
`;

const getTerms = locale => {
  switch (locale.value) {
    case 'ja':
      return require(`./../terms/ja-JP.md`);
    case 'ko':
      return require(`./../terms/ko-KR.md`);
    case 'zh-Hans':
      return require(`./../terms/zh-Hans.md`);
    case 'zh-Hant':
      return require(`./../terms/zh-Hant.md`);
    case 'en':
    default:
      return require(`./../terms/en-US.md`);
  }
};

const _Terms = ({ locale, intl: { formatMessage } }) => (
  <Container>
    <TitleIconBlock icon={tocIconSVG} />
    <TitleTextBlock>
      <span style={{marginLeft:'59px'}} />
      <FormattedHTMLMessage id={'header.terms-and-condtions-part1'}/>
      <br></br>
      <FormattedHTMLMessage id={'header.terms-and-condtions-part2'}/>
    </TitleTextBlock>
    <SectionTOC>
      <TermsOfUseText localizedTermsOfUse={getTerms(locale)} />
    </SectionTOC>
  </Container>
);

const Terms = inject('locale')(injectIntl(observer(_Terms)));

export default Terms;
