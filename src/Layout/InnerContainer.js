import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 100%;

    ${({ theme }) => theme.mq.tabletM} {
        margin: 0 3rem 0 auto;
        width: 85%;
    }
`

const InnerContainer = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

InnerContainer.propTypes = {
    children: PropTypes.node,
}

export default InnerContainer
