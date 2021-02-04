import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerContainer = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

InnerContainer.propTypes = {
    children: PropTypes.node,
}

export default InnerContainer
