import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapper = styled.section`
    row-gap: 2.5rem;
    padding: 5rem 0.5rem 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90rem;
    width: 100%;

    ${({ theme }) => theme.mq.laptopS} {
        padding: 8rem 3rem 0;
    }
`

const Section = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

Section.propTypes = {
    children: PropTypes.node,
}

export default Section
