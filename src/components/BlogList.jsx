import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import Blog from './Blog'

import { Container } from '../css';


const Root = styled.div`
  max-width:1400px;
  text-align:center;
  display:flex;
  flex-direction:column;
  margin:0 auto;
`

const SectionDescription = styled.p`
  max-width:429px;
  margin:0 auto;
  text-align:center;
  color: #1D1E21;	
  font-family: Rubik;	
  font-weight:200;
  font-size: 18px;	
  line-height: 22px;
  margin-top:12px;
`

const ListWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  max-width:1400px;
  margin-top:39px;
`

const SectionTitle = styled.div`
  color: #215F68;	
  font-family: Rubik;	
  font-size: 24px;	
  font-weight: bold;
  text-align:center;
  padding-top:50px;

`
class BlogList extends Component {
  render() {
    const _Blog = ({ intl: { formatMessage } }) => (
      <Root style={{ paddingBottom: '30px' }}>
        <SectionTitle style={{ paddingBottom: '10px' }}>{formatMessage({ id: 'home.blog.blog' })}</SectionTitle>
        <SectionDescription style={{ paddingBottom: '10px' }}>{formatMessage({ id: 'home.blog.blogDesc' })}</SectionDescription>
        <ListWrapper >
          <Blog imgSrc="./assets/testAssets/photos/Blog 1.jpg" date={formatMessage({ id: 'home.blog.blog1-date' })} description={formatMessage({ id: 'home.blog.blog1-text' })} />
          <Blog imgSrc="./assets/testAssets/photos/Blog 2.jpg" date={formatMessage({ id: 'home.blog.blog2-date' })} description={formatMessage({ id: 'home.blog.blog2-text' })} />
          <Blog imgSrc="./assets/testAssets/photos/Blog 3.jpg" date={formatMessage({ id: 'home.blog.blog3-date' })} description={formatMessage({ id: 'home.blog.blog3-text' })} />
        </ListWrapper>
      </Root>
    );

    const BlogList = inject('locale')(injectIntl(observer(_Blog)));

    return <BlogList />;
  }
}

export default BlogList;
