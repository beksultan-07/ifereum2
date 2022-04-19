import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn, BannerTitle, BannerWrap } from './BannerSC'
import {useTranslation} from "react-i18next";
import { Text } from '../../uikit/fonts';


const Banner:React.FC = () => {
    const ArrowRightIcon = require('../../assets/blackArrow.svg')['default']

    const {t} = useTranslation()


  return (
    <BannerWrap>
        <Container>
            <Flex direction='column' align='center'>
                <BannerTitle>
                    <span>{t("Home.Banner.title")}</span> <br />
                    {t("Home.Banner.title2")}
                </BannerTitle>
                <Text margin='20px 0'>
                    {t("Home.Banner.text")}
                </Text>
                <BannerBtn>
                    <span>{t("Home.Banner.btn")}</span>
                    <img src={ArrowRightIcon}/>
                </BannerBtn>
            </Flex>
        </Container>
    </BannerWrap>
  )
}

export default Banner