import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';

import { Container, ContainerGrey, SectionTitle } from '../css';

class Collaborators extends Component {
  render() {
    const _Collaborators = ({ intl: { formatMessage } }) => (
      <ContainerGrey>
        <Container>
          <SectionTitle>{formatMessage({ id: 'home.collaborators.our-collaborators' })}</SectionTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '23px',
            }}
          >
            <div style={{ margin: '16px' }}>
              <a target="_blank" href="https://emurgo.io/">
                <img onMouseEnter={e => (e.currentTarget.src = './assets/emurgo-hover.svg')} onMouseLeave={e => (e.currentTarget.src = './assets/emurgo-default.svg')} style={{ height: '50px' }} src="./assets/emurgo-default.svg" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" />
              </a>
            </div>
            <div style={{ margin: '16px' }}>
              <a target="_blank" href="https://iohk.io/">
                <img onMouseEnter={e => (e.currentTarget.src = './assets/input-output-hover.svg')} onMouseLeave={e => (e.currentTarget.src = './assets/input-output-default.svg')}style={{ height: '50px' }} src="./assets/input-output-default.svg" alt="iohk" />
              </a>
            </div>
            <div style={{margin:'16px'}}>
              <a target="_blank" href= "https://vacuumlabs.com/">
              <img onMouseEnter={e => (e.currentTarget.src = './assets/vacuumlabs-hover.svg')} onMouseLeave={e => (e.currentTarget.src = './assets/vacuumlabs-default.svg')} style={{ height: '50px' }} src="./assets/vacuumlabs-default.svg" alt="Vacuumlabs" />
              </a>
            </div>
            <div style={{margin:'16px'}}>
              <a target="_blank" href= "https://www.cardano.org/en/home/">
              <img onMouseEnter={e => (e.currentTarget.src = './assets/cardano-hover.svg')} onMouseLeave={e => (e.currentTarget.src = './assets/cardano-default.svg')} style={{ height: '50px' }} src="./assets/cardano-default.svg" alt="Cardano" />
              </a>
            </div>
          </div>
        </Container>
      </ContainerGrey>
    );

    const Collaborators = inject('locale')(injectIntl(observer(_Collaborators)));

    return <Collaborators />;
  }
}

export default Collaborators;
