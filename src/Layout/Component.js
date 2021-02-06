import React, { useState } from 'react'
import Global from '../utils/globalStyle'
import Container from './Container'
import styled, { css } from 'styled-components'
import { Footer, Navigation } from '../components'

const StyledWrapper = styled.main`
    ${({ isScrollBlocked }) =>
        isScrollBlocked &&
        css`
            overflow: hidden;
            max-height: 100vh;
            height: 100vh;
            width: 100%;
        `};
`

const StyledContent = styled.div`
    //
`

const LayoutComponent = ({ children }) => {
    const [isNavOpen, setNavOpen] = useState(false)

    const toggleOpen = () => {
        setNavOpen(state => !state)
    }

    return (
        <StyledWrapper isScrollBlocked={isNavOpen}>
            <Navigation isOpen={isNavOpen} toggleOpen={toggleOpen} />
            <Container>
                <StyledContent>
                    <Global />
                    {children}
                </StyledContent>
                <Footer />
            </Container>
        </StyledWrapper>
    )
}

export default LayoutComponent
