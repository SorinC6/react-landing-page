import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';

import { Container, OverflowS } from './../css';

const Oval = styled.div`
  height: 99px;
  width: 99px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.1);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45.45%;
  margin-top: 10px;
`;

class TitleIconBlock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const _TitleIconBlock = ({ intl: { formatMessage } }) => (
      <Container>
        <OverflowS style={{ height: '200px' }} />
        <Oval>
          <img  src={this.props.icon} />
        </Oval>
      </Container>
    );

    const TitleIconBlock = inject('locale')(injectIntl(observer(_TitleIconBlock)));
    return <TitleIconBlock />;
  }
}

export default TitleIconBlock;
