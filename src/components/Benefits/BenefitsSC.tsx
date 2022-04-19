import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

export const BItems = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media(max-width: 848px){
        order: 2;
    }
    @media(max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const BItem = styled.li`
    
`

export const BItemImg = styled.img`
    width: 45px;
`

export const BWrap = styled(Flex)`
    @media(max-width: 848px){
        flex-direction: column;
        align-items: center;
    }
`

export const BBanner = styled.img`
    width: 100%;
    max-width: 450px;
    @media(max-width: 848px){
        margin: 0 0 30px;
    }
` 