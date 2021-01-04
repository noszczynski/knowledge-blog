import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    padding: 0 3rem;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;

    ${({ theme }) => theme.mq.tabletM} {
        width: ${({ theme }) => theme.breakpoint.tabletM}px;
    }

    ${({ theme }) => theme.mq.laptopL} {
        width: ${({ theme }) => theme.breakpoint.laptopL}px;
    }
`

const Container = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

export default Container
