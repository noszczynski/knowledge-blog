import React from 'react'
import { ArrowForward } from '@material-ui/icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const StyledLink = styled(GatsbyLink)`
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.color.accent};
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: inline-flex;
    font-size: 1.5rem;
    line-height: calc(1em + 0.5rem);
    font-weight: 500;

    svg {
        margin-left: 1rem;
        transition: transform 0.15s ease-in-out;
    }

    :hover {
        text-decoration: underline;

        svg {
            transform: translateX(0.25rem);
        }
    }
`

const Link = ({ slug, children }) => {
    return (
        <StyledLink to={slug}>
            {children}
            <ArrowForward />
        </StyledLink>
    )
}

Link.propTypes = {
    slug: PropTypes.string.isRequired,
    children: PropTypes.node,
}

Link.defaultProps = {
    slug: '',
}

export default Link
