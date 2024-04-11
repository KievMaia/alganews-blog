import styled from "styled-components";
import {transparentize} from "polished";

export const Wrapper = styled.footer`
    background-color: ${p => p.theme.activeElementBackground};
    color: ${p => p.theme.activeElementForeground};
    
    width: 100%;
    height: 346px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    max-width: 848px;
    margin: auto;
    height: 100%;
`