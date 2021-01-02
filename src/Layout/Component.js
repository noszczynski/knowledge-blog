import React from 'react'
import Global from '../utils/globalStyle'
import Container from './Container'
import styled from 'styled-components'
import { Navigation } from '../components'

const StyledWrapper = styled.main``

const LayoutComponent = ({ setThemeMode, children }) => {
    return (
        <>
            <Navigation />
            <Container>
                <StyledWrapper>
                    <Global />
                    {children}
                </StyledWrapper>
            </Container>
        </>
    )
}

export default LayoutComponent
