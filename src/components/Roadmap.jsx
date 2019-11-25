import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';

const RoadmapContainer = styled(Container)`
  max-width: 1200px;
  margin-bottom: 60px;
`;

const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const TimeSlotText = styled.div`
	color: #15D1AA;
	font-family: Rubik;
  font-size: 26px;
`;

const TimeSlotTextSecondary = styled(TimeSlotText)`
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
  margin-bottom: 2px;
`;

const LineBlock = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border: 2px solid #F0F3F5;
`;

const TimeCircleWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeCircleBase = styled.div`
  border-radius: 50%;
  behavior: url(PIE.htc); /* IE8 */
`;

const TimeCircleOuterBig = styled(TimeCircleBase)`
  min-width: 36px;
  min-height: 36px;
  background-color: #F0F3F5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 53px;
  margin-right: 53px;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
`;

const TimeCircleGreen = styled(TimeCircleBase)`
  min-width: 20px;
  min-height: 20px;
  background-color: #17D1AA;  
`;

const TimeCircleOuterSmall = styled(TimeCircleBase)`
  min-width: 26px;
  min-height: 26px;
  background-color: #F0F3F5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 53px;
  margin-right: 53px;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};  
`;

const TimeCircleBlue = styled(TimeCircleBase)`
  min-width: 14px;
  min-height: 14px;
  background-color: #2F5AE9;
`;

const GoalRow = styled.div`
  display: flex;
`;

const GoalWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Goal = styled.div`
  flex: 1 0 31%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 320px;
  max-width: 320px;
`;

const GoalImage = styled.img`
  margin-right: 24px;
`;

const GoalTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 160px;  
`;

const GoalText = styled.div`
  color: #353535;
  font-family: Rubik;
  font-size: 16px;
  line-height: 24px;
`;

const GoalTextSub = styled(GoalText)`
  color: #A7AFC0;
`;

const MoveLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  margin-right: 10px;
`;

const MoveRight = styled(MoveLeft)`
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  behavior: url(PIE.htc); /* IE8 */
  background: #F0F3F5;
  .leftArrow, [disabled] {
    width: 24px;
    height: 24px;
    background: url("./assets/arrow-default-left.svg") no-repeat;
  }  
  .rightArrow, [disabled] {
    width: 24px;
    height: 24px;
    background: url("./assets/arrow-default-right.svg") no-repeat;
  }
  &[disabled] {
    cursor: default;
  }
  :hover:not([disabled]) {
    .leftArrow {
      background: url("./assets/arrow-highlight-left.svg") no-repeat;
    };
    .rightArrow {
      background: url("./assets/arrow-highlight-right.svg") no-repeat;
    };
  };
`;

const roadMapList = [
  {
    titleId: 'home.roadmap.2018.title',
    subTitleId: 'home.roadmap.2018.sub-title',
    goals: [
      {
        nameId: 'home.roadmap.2018.goal.mobile-apps',
        assetName: 'native-mobile-apps.svg'
      },
      {
        nameId: 'home.roadmap.2018.goal.hardware-wallet',
        assetName: 'trezor-integration.svg'
      },
      {
        nameId: 'home.roadmap.2018.goal.tx-ecxel-export',
        assetName: 'export-txs.svg'
      },
      {
        nameId: 'home.roadmap.2018.goal.more-lang',
        assetName: 'more-languages.svg'
      },
      {
        nameId: 'home.roadmap.2018.goal.multi-browser-support',
        assetName: 'support-for-other-browsers.svg'
      },      
    ]
  },
  {
    titleId: 'home.roadmap.2019-Q1-Q2.title',
    subTitleId: 'home.roadmap.2019-Q1-Q2.sub-title',
    goals: [
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.new-design',
        assetName: 'new-theme.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.send-all',
        assetName: 'send-all.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.paper-wallet',
        assetName: 'paper-wallet.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.more-lang',
        subNameId: 'home.roadmap.2019-Q1-Q2.goal.more-lang-sub',
        assetName: 'more-languages.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.firefox-support',
        assetName: 'firefox.svg'
      },      
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.performace-improvement',
        assetName: 'perfomance-improvement.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.ada-redempition',
        assetName: 'ada-redemption.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.ledger-support',
        assetName: 'ledger-integration.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.explorer-integration',
        assetName: 'blockchain-explorer.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q1-Q2.goal.account-plates',
        assetName: 'account-plates.svg'
      },
    ]
  },
  {
    titleId: 'home.roadmap.2019-Q3-Q4.title',
    subTitleId: 'home.roadmap.2019-Q3-Q4.sub-title',
    goals: [
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.shelley-support',
        subNameId: 'home.roadmap.goal.common-sub-testnet-mainnet',
        assetName: 'Shelley-support.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.staking-support',
        subNameId: 'home.roadmap.goal.common-sub-testnet-mainnet',
        assetName: 'staking.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.mobile-staking',
        subNameId: 'home.roadmap.goal.common-sub-testnet-mainnet',
        assetName: 'Mobile-staking.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.more-lang',
        subNameId: 'home.roadmap.2019-Q3-Q4.goal.more-lang-sub',
        assetName: 'more-languages.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.payment-urls',
        assetName: 'url-scheme.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.hide-balance',
        assetName: 'hide-balance.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.ouroboros-bft',
        assetName: 'Ouroboros.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.lock-screen',
        assetName: 'lock-screen.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.full-node',
        assetName: 'full-node.svg'
      },
      {
        nameId: 'home.roadmap.2019-Q3-Q4.goal.multisig',
        subNameId: 'home.roadmap.goal.common-sub-testnet-mainnet',
        assetName: 'multisig.svg'
      },      
    ]
  }
];

class Roadmap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTimeSlot: 2,
      leftDisabled: '',
      rightDisabled: 'disabled'
    };
  }

  _updateButtons = () => {
    // Make go right disabled if it's last time slot
    let rightDisabled = ''
    if (this.state.selectedTimeSlot === (roadMapList.length - 1)) {
      rightDisabled = 'disabled';
    }
    this.setState({ rightDisabled });

    // Make go left disabled if it's first time slot
    let leftDisabled = ''
    if(this.state.selectedTimeSlot === 0) {
      leftDisabled = 'disabled'
    }
    this.setState({ leftDisabled });
  }

  _onMoveLeft = () => {
    if(this.state.selectedTimeSlot >= 1) {
      this.setState({
        selectedTimeSlot: (this.state.selectedTimeSlot - 1)
      }, this._updateButtons)
    }
  }

  _onMoveRight = () => {
    if(this.state.selectedTimeSlot < (roadMapList.length - 1)) {
      this.setState({
        selectedTimeSlot: (this.state.selectedTimeSlot + 1)
      }, this._updateButtons)
    }
  };

  _makeGoals = (timeBlock, formatMessage) => (
    timeBlock.goals.map(goal => {
      const imgSrc=`./assets/roadmap/${goal.assetName}`;
      return (
        <Goal key={'goal-' + goal.nameId}>
          <GoalImage src={imgSrc}/>
          <GoalTextBlock>
            <GoalText>
              {formatMessage({ id: goal.nameId})}
            </GoalText>
            {goal.subNameId && (
              <GoalTextSub>
                {formatMessage({ id: goal.subNameId})}
              </GoalTextSub>
            )}
            </GoalTextBlock>
        </Goal>
      );
    })
  );

  _makeTimePointers = () => {

    const pointsCount = (2*(roadMapList.length) - 1);

    let showList = Array(pointsCount);
    showList = showList.fill(0);

    const start = roadMapList.length -1 -this.state.selectedTimeSlot;
    const end = start + roadMapList.length;
    showList = showList.fill(1, start, end);

    const pointers = [];
    for (var idx = 0; idx < pointsCount; idx++) {
      let comp = null;
      if (idx === roadMapList.length -1) {
        // Big Outer
        comp = (
          <TimeCircleOuterBig key={`time-${idx}`} show={showList[idx]}>
            <TimeCircleGreen>
            </TimeCircleGreen>
          </TimeCircleOuterBig>
        );
      } else {
        // Small Outer
        comp = (
          <TimeCircleOuterSmall key={`time-${idx}`} show={showList[idx]}>
            <TimeCircleBlue>
            </TimeCircleBlue>
          </TimeCircleOuterSmall>
        );
      }
      pointers.push(comp);
    }

    return pointers;
  };
  
  render() {
    const _Roadmap = ({ intl: { formatMessage } }) => {
      return (
        <RoadmapContainer>
          <SectionTitle style={{ paddingBottom: '4px' }}>
            {formatMessage({ id: 'home.roadmap.yoroi-roadmap' })}
          </SectionTitle>
          <TimeLine>
            <TimeSlotText>
              {formatMessage({ id: roadMapList[this.state.selectedTimeSlot].titleId })}
            </TimeSlotText>
            <TimeSlotTextSecondary>
              {formatMessage({ id: roadMapList[this.state.selectedTimeSlot].subTitleId })}
            </TimeSlotTextSecondary>
            <LineBlock>
              <Line />
              <TimeCircleWrap>
                {this._makeTimePointers()}
              </TimeCircleWrap>
            </LineBlock>
          </TimeLine>
          <GoalRow>
            <MoveLeft>
              <Circle
                onClick={this._onMoveLeft}
                disabled={this.state.leftDisabled}
              >
                <div className="leftArrow" />
              </Circle>
            </MoveLeft>
            <GoalWrap>
              {this._makeGoals(roadMapList[this.state.selectedTimeSlot], formatMessage)}
            </GoalWrap>
            <MoveRight>
              <Circle
                onClick={this._onMoveRight}
                disabled={this.state.rightDisabled}
              >
                <div className="rightArrow" />
              </Circle>
            </MoveRight>
          </GoalRow>
        </RoadmapContainer>
      );
    };

    const Roadmap = inject('locale')(injectIntl(observer(_Roadmap)));

    return <Roadmap />;
  }
}

export default Roadmap;
