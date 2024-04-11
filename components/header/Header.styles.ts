import styled from "styled-components";
import {transparentize} from "polished";

export const Wrapper = styled.div`
    background-color: ${p => p.theme.activeElementBackground};
    color: ${p => p.theme.activeElementForeground};
    box-shadow: 0 3px 10px ${p => transparentize(0.9, p.theme.pageForeground)};
    
    width: 100%;
    height: 56px;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 848px;
    margin: auto;
    height: 100%;
`