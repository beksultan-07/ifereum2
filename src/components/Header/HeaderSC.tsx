import styled from "styled-components";
import { Flex } from "../../uikit/uikit";


export const HeaderWrap = styled.header`

`


export const HeaderLogoWrap = styled.a`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 21px 0;
    position: relative;
    left: 50px;
    @media(max-width: 768px){
        padding: 10px 0;
        left: 0px;
    }
` 

export const HeaderLogo = styled.img`
    width:  45px;
`

export const HeaderLogoText = styled.p`
    font-family: 'Rany700';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 32px;
    color: #FFFFFF;
    margin-left: 14px; 
    @media(max-width: 768px){
        font-size: 26px;
    }
` 











export const LangDropDown = styled.img`
    width: 10px;
    margin-left: 10px;
` 

export const LangWrap = styled(Flex)`
    position: relative;
    cursor: pointer;
` 


export const LangIcon = styled.img`
    width: 30px;
`

type LangProps = {
    ddShow: boolean;
} 

export const LDDWrap = styled.div<LangProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* top: 0px; */
    top: ${props => props.ddShow?'61px':'0'};
    /* left: 0; */
    right: 0;
    visibility: ${props => props.ddShow?'visible':'hidden'};
    transition: .3s;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
    border-radius: 15px;
    opacity: ${props => props.ddShow?'1':'0'};
`

export const LDDIcon = styled.img`
    padding: 15px;
    width: 60px;
    margin: 0;
`
