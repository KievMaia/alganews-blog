import React from 'react';
import styles from "@/app/page.module.css";
import styled from "styled-components";

export default function Paragraph() {
    return (
        <Wrapper>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.tsx</code>
        </Wrapper>
    );
}

export const Wrapper = styled.p`
    color: red;
`