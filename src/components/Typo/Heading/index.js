import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const heading = css`
    display: inline-flex;
    padding: 0;
    margin: 0;
`

const StyledH1 = styled.h1`
    ${heading};

    font-size: 5rem;
    line-height: calc(1em + 0.125rem);
    font-weight: 700;
`

const StyledH2 = styled.h2`
    ${heading};
`

const StyledH3 = styled.h3`
    ${heading};
`

const StyledH4 = styled.h4`
    ${heading};
`

const StyledH5 = styled.h5`
    ${heading};
`

const StyledH6 = styled.h6`
    ${heading};
`

const HEADINGS = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
}

const Heading = ({ variant, children }) => {
    switch (variant) {
        case HEADINGS.H1:
            return <StyledH1>{children}</StyledH1>
        case HEADINGS.H2:
            return <StyledH2>{children}</StyledH2>
        case HEADINGS.H3:
            return <StyledH3>{children}</StyledH3>
        case HEADINGS.H4:
            return <StyledH4>{children}</StyledH4>
        case HEADINGS.H5:
            return <StyledH5>{children}</StyledH5>
        case HEADINGS.H6:
            return <StyledH6>{children}</StyledH6>
        default:
            return null
    }
}

Heading.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
}

Heading.defaultProps = {
    variant: 'h3',
}

export default Heading
