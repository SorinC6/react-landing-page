import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

const DropdownButton = styled.label`
  cursor: pointer;
  flex: 1;
  height: 48px;	
  width: 190px;	
  min-width: 160px;
  border-radius: 8px;	
  background-color: #17D1AA;	
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow: hidden;
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
  overflow: hidden;
  text-transform:initial;
  text-align: justify;
  width: 190px;

  .dropdown-link {
    background-color: #17d1aa;
    padding: 10px 5px;
    display: block;
    font-size: 14px;
    img {
      margin-left: 0px;
    }
  }
  .dropdown-link:hover {
    background-color: #14E2B8
  }
`;

const DownloadTop = styled.div`
  position: relative;
  display: inline-block;
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 15px;	
  font-weight: initial;	
  margin-top: -10px;
   
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

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDownloadDropdown: false,
    };
  }

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };

  render() {
    const _Download = ({ intl: { formatMessage } }) => (
      <DownloadTop style={{marginTop: '-10px'}}>       
        <DropdownButton onClick={this.showDropdownMenu}>
          <div style={{marginLeft: '-70px', fontSize: '15px', fontWeight: '500', marginTop: '14px', textTransform: 'uppercase' }}>
            {formatMessage({id: 'header.download'})}
            <div style={{marginTop:'-18px', marginLeft: '160px'}}>
              <img style={{marginLeft: '50px'}} src="./assets/arrow-down.svg" />
            </div>
          </div>
        </DropdownButton>
        {
          this.state.showDownloadDropdown &&
          <OutsideClickHandler onOutsideClick={this.hideDropdownMenu}>
            <DropdownContent >
              <a
                rel="noopener"
                className="dropdown-link"
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
                className="dropdown-link"
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
                className="dropdown-link"
                target= '_blank'
                href="https://addons.mozilla.org/en-US/firefox/addon/yoroi/"
              >
                <DownloadItemImage src="./assets/firefox.svg" />
                {formatMessage({id: 'download.mainnet.firefox'})}
              </a>
              <a
                rel="noopener"
                className="dropdown-link"
                target= '_blank'
                href="https://addons.mozilla.org/en-US/firefox/addon/yoroi-shelley-testnet/"
              >
                <DownloadItemImage src="./assets/firefox.svg" />
                {formatMessage({id: 'download.testnet.firefox'})}
              </a>                        
              <a
                rel="noopener"
                className="dropdown-link"
                target= '_blank'
                href="https://play.google.com/store/apps/details?id=com.emurgo&hl=en"
              >
                <DownloadItemImage src="./assets/google-play.svg" />
                {formatMessage({id: 'download.mainnet.android'})}
              </a>
              <a
                rel="noopener"
                className="dropdown-link"
                target= '_blank'
                href="https://apps.apple.com/us/app/emurgos-yoroi-cardano-wallet/id1447326389"
              >
                <DownloadItemImage src="./assets/apple.svg" />
                {formatMessage({id: 'download.mainnet.ios'})}
              </a>          
            </DropdownContent>
          </OutsideClickHandler>
       }
     </DownloadTop>
    )

    const Download = inject('locale')(injectIntl(observer(_Download)));
    return <Download />;
  }
}

export default Download;
 