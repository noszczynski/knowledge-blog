import React from 'react'
import styled from 'styled-components'
import { LogoSVG } from '../index'
import { Link } from 'gatsby'

const StyledWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: flex-start;
    grid-column: 1 / span 3;
`

const Logo = ({ isLink }) => {
    return <StyledWrapper>{isLink ? <Link to={'/'}>{LogoSVG}</Link> : LogoSVG}</StyledWrapper>
}

export default Logo
