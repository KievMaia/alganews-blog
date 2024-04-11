import React from 'react';
import * as F from './Footer.styles'

function Footer(props: any) {
    return (
        <F.Wrapper>
            <F.Container>
                <span>logo</span>
                <span>créditos</span>
            </F.Container>
        </F.Wrapper>
    );
}

export default Footer;