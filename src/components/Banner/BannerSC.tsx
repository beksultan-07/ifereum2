import styled from "styled-components";


export const BannerWrap = styled.section`
    text-align: center;
    p{
        max-width: 590px;
        margin: 0 auto;
        padding: 20px 0;
    }
    
`

export const BannerTitle = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 84px;
    line-height: 90px;
    color: #fff;
    padding: 150px 0 0;
    span{
        color: #FFF6A9;
    }

    @media(max-width: 886px){
        padding: 100px 0 0;
        font-size: 72px;
        line-height: 78px;
    }

    @media(max-width: 526px){
        font-size: 52px;
        line-height: 60px;
    }
    @media(max-width: 320px){
        font-size: 50px;
    }
`

export const BannerBtn = styled.button`
    background: #FFEE2D;
    padding: 14px 0;
    cursor: pointer;
    width: 280px;
    display: flex;
    outline: none;
    border: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    @media(max-width: 760px){
        align-self: center;
    }

    span{
        font-family: 'Rany';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 22px;
        color: #171717;
    }
    img{
        width: 16px;
        margin: 0 0 0 5px;
    }
`