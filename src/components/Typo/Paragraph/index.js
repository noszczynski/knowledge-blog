import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-size: 1.5rem;
    line-height: calc(1em + 0.5rem);
    font-weight: 500;
    letter-spacing: -0.0125em;
    color: rgb(120, 132, 141);
    overflow: hidden;

    ::selection {
        background-color: cadetblue;
    }
`

const Paragraph = ({ children }) => {
    return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph
