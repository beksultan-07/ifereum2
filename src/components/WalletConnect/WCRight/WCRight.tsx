import React from 'react'
import { MiniText, TinyText } from '../../../uikit/fonts'
import { Flex } from '../../../uikit/uikit'
import { WCLBtn, WCRightWrap, WCLink, WCLInside, WCUl, WCItem, WCBtns, WCBtn, WCRInfoSide } from '../WalletConnectSC'

const WCRight:React.FC = () => {
    const ArrowRightIcon = require('../../../assets/blackArrow.svg')['default']
    const ArrowRightIconWhite = require('../../../assets/whiteArrow.svg')['default']

  return (
    <WCRightWrap>
        <WCLInside style={{height: '100%'}}>
            <WCRInfoSide align='flex-start' justify='space-between' margin='20px 0 0'>
                <Flex direction='column'>
                    <WCLink href='#'>Your Referral Link</WCLink>
                    <TinyText>Connect wallet to see Referral link.</TinyText>
                </Flex>

                <WCLBtn>
                    <span>Claim</span>
                </WCLBtn>
            </WCRInfoSide>

            <WCUl>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Total invited</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>0 Users</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Airdorp tasks</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>0 MetaUFO</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO Rate</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>0.00004 BNB/1 MetaUFO</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO Start</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>Wednesday, Mar 30, 2022</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>IDO end</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>Friday, April 29, 2022</MiniText>
                    </Flex>
                </WCItem>
                <WCItem>
                    <Flex justify='space-between'>
                        <MiniText>Unlock date</MiniText>
                        <MiniText color='#FFEE2D' margin='0 0 0 5px'>June 28, 2022</MiniText>
                    </Flex>
                </WCItem>
            </WCUl>
            
            <WCBtns>
                <WCLBtn>
                    <span>View Chat</span>
                    <img src={ArrowRightIcon} alt="" />
                </WCLBtn>

                <WCBtn>
                    <span>View Audit</span>
                    <img src={ArrowRightIconWhite} alt="" />
                </WCBtn>

                <WCBtn>
                    <span>Locked LP</span>
                    <img src={ArrowRightIconWhite} alt="" />
                </WCBtn>

            </WCBtns>
        </WCLInside>
    </WCRightWrap>
  )
}

export default WCRight