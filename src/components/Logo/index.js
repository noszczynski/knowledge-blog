import React from 'react'
import styled from 'styled-components'
import { LogoSVG } from '../index'

const StyledWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: flex-start;
    grid-column: 1 / span 3;
`

const Logo = () => {
    return <StyledWrapper>{LogoSVG}</StyledWrapper>
}

export default Logo
