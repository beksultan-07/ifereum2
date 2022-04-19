import styled from 'styled-components'

type Props = {
    justify?: 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end';
    align?: 'center' | 'flex-start' | 'flex-end';
    margin?: string | '0';
    flex?: number;
    direction?: 'column' | 'row';
    flexWrap?: string;
    width?: string | '100%'
  };
  
  export const Flex = styled.div<Props>`
    display: flex;
    flex: ${(props) => props.flex || 'none'};
    justify-content: ${(props) => props.justify || 'stretch'};
    align-items: ${(props) => props.align || 'stretch'};
    flex-direction: ${(props) => props.direction || 'row'};
    margin: ${(props) => props.margin};
    flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
    width: ${props => props.width || 'auto'};
  `;
  
  
  export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 10px;
    height: 100%;
  `