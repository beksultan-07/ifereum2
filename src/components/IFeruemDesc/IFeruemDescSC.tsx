import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

// IFD is IFereum description
export const IFDTextWrap = styled.div`
    max-width: 580px;
    margin-top: 100px;
` 

export const IFDItemsWrap = styled.ul`
    list-style: none;
    margin: 50px 0 0; 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media(max-width: 620px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const IFDItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 255px;
    background: #171717;
    box-shadow: 0px 167px 67px rgba(0, 0, 0, 0.02), 0px 94px 56px rgba(0, 0, 0, 0.06), 0px 42px 42px rgba(0, 0, 0, 0.1), 0px 10px 23px rgba(0, 0, 0, 0.11), 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
`

export const IFDNum = styled.h1`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 128px;
    line-height: 95px;
    color: #FFEE2D;
    margin-right: 40px; 
`

export const IFDViewMore = styled.a`
    display: flex;
    align-items: center;
    margin-top: auto;
    @media(max-width: 1074px){
        padding-bottom: 20px;
    }
`

export const IFDIcon =  styled.img`
    width: 16px;
    margin: 0 0 0 14px;
`

export const IDWrap = styled(Flex)`
    align-items: center;
    @media(max-width: 988px){
        align-items: flex-start;
        flex-direction: column;
    }
`