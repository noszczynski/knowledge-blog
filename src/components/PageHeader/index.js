import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 5rem;
    margin-bottom: 8rem;
    align-items: center;
    justify-content: center;
`

const StyledHeader = styled.h2`
    font-size: 5rem;
    line-height: calc(1em + 0.125rem);
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
`

const PageHeader = ({ children }) => {
    return (
        <StyledWrapper>
            <StyledHeader>{children}</StyledHeader>
        </StyledWrapper>
    )
}

export default PageHeader
