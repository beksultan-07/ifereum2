import React from 'react'
import { Container, Flex } from '../../uikit/uikit';
import LangDD from '../langDropDown/LangDD';
import { HeaderLogo, HeaderLogoText, HeaderLogoWrap, LangDropDown, LangIcon, LangWrap, HeaderWrap } from './HeaderSC';


type Props = {
    lang: string;
    setLang: any;
    showDD: boolean;
    setShowDD: any;
}

const Header:React.FC<Props> = (props) => {
    const logo = require("../../assets/LOGO.svg")['default'];

    const DropDownIcon = require("../../assets/DropDown.svg")['default'];

    const LangIco1 = require("../../assets/langs/En.svg")['default']
    const LangIco2 = require("../../assets/langs/ru.png")


    function checkLang(){
        if(props.lang === 'en'){
            return LangIco1
        }
        if(props.lang === 'ru'){
            return LangIco2
        }
    }

    function langHandler(e: React.MouseEvent){
        e.stopPropagation()
        props.setShowDD(true)
    }


  return (
    <HeaderWrap>
        <Container>
            <Flex justify='space-between'>
                <HeaderLogoWrap href='#'>
                    <HeaderLogo src={logo}/>
                    <HeaderLogoText>IFEREUM</HeaderLogoText>
                </HeaderLogoWrap> 
        
                <LangWrap align='center' onClick={(e)=> langHandler(e)}>
                    <LangIcon src={checkLang()} />
                    <LangDropDown src={DropDownIcon}/>
                    <LangDD activeLang={props.lang} ddShow={props.showDD} setActiveLang={props.setLang}/>
                </LangWrap>
            </Flex>
        </Container>
    </HeaderWrap>
  )
}

export default Header