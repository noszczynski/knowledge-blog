import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.span`
    display: flex;
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.accent};
`

const Distinction = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

Distinction.propTypes = {
    children: PropTypes.node,
}

export default Distinction
