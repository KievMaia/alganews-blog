'use client'
import React from 'react';
import * as P from './Header.styles'

export default function Header(props: any) {
    return (
        <P.Wrapper>
            <P.Container>
                <span>logo</span>
                <span>navbar</span>
            </P.Container>
        </P.Wrapper>
    );
}