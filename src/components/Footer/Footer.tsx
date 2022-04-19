import React from 'react'
import { TinyText } from '../../uikit/fonts';
import { Container, Flex } from '../../uikit/uikit';
import { HeaderLogoWrap, HeaderLogo, HeaderLogoText } from '../Header/HeaderSC'

import { FooterIcon, FooterIcons, FooterWrap, FooterLogoWrap, FooterInside } from './FooterSC'

const Footer:React.FC = () => {
    const logo = require("../../assets/LOGO.svg")['default'];
  
    const icon1 = require('../../assets/social medias/footer/Path.svg')['default']
    const icon2 = require('../../assets/social medias/footer/Path-1.svg')['default']
    const icon3 = require('../../assets/social medias/footer/Path-2.svg')['default']
    const icon4 = require('../../assets/social medias/footer/Path-3.svg')['default']

  
    return (
    <FooterWrap>
        <Container>
            <FooterInside>
                <TinyText>© 2022 Ifereum. All rights reserved</TinyText>

                <FooterLogoWrap href='#'>
                    <HeaderLogo src={logo}/>
                    <HeaderLogoText>IFEREUM</HeaderLogoText>
                </FooterLogoWrap>

                <FooterIcons>
                    <FooterIcon>
                        <img src={icon1} alt="" />
                    </FooterIcon>
                    <FooterIcon>
                        <img src={icon2} alt="" />
                    </FooterIcon>
                    <FooterIcon>
                        <img src={icon3} alt="" />
                    </FooterIcon>
                    <FooterIcon>
                        <img src={icon4} alt="" />
                    </FooterIcon>
                </FooterIcons>

            </FooterInside>
        </Container>
    </FooterWrap>
  )
}

export default Footer