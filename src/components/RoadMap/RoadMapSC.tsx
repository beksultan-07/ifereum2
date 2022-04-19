import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

// RM - RoadMap
export const RMWrap = styled.div`

`

export const RMItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const RMLine = styled.div`
    width: 100vw;
    height: 10px;
    background: #FFEE2D;
    position: absolute;
    top: 80px;
    left: 0;
`

export const CheckedIconS = styled.img`
    width: 24px;
    margin-right: 5px;
`

export const RMItemWrap = styled(Flex)`
    flex-direction: column;
    padding: 20px;
    position: relative;
    /* bottom: 20px; */
    z-index: 2;
    background: #171717;
    box-shadow: 0px 167px 67px rgba(0, 0, 0, 0.02), 0px 94px 56px rgba(0, 0, 0, 0.06), 0px 42px 42px rgba(0, 0, 0, 0.1), 0px 10px 23px rgba(0, 0, 0, 0.11), 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
`