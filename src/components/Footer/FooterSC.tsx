import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'
import { HeaderLogoWrap, HeaderLogo, HeaderLogoText } from '../Header/HeaderSC'


export const FooterLogoWrap = styled(HeaderLogoWrap)`
    @media(max-width: 654px){
        order: 0;
    }
    margin: 0;
    left: 0;
`

export const FooterInside = styled(Flex)`
    justify-content: space-between; 
    align-items: center;
    @media(max-width: 654px){
        flex-direction: column;
        p{
            order: 2;
            padding: 0 0 20px;
        }
    }
`

export const FooterWrap = styled.footer`
    background: #0B0D17;
`

export const FooterIcons = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    @media(max-width: 654px){
        order: 1;
        margin: 20px 0;
    }
`

export const FooterIcon = styled.li`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #23252E;
    border-radius: 50%;
    margin: 0 15px 0 0;
    :last-child{
        margin: 0;
    }
    img{
        width: 20px;
    }
` 