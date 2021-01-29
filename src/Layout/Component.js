import React from 'react'
import Global from '../utils/globalStyle'
import Container from './Container'
import styled from 'styled-components'
import { Footer, Navigation } from '../components'

const StyledWrapper = styled.main``

const LayoutComponent = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container>
                <StyledWrapper>
                    <Global />
                    {children}
                </StyledWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default LayoutComponent
