import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from '../index'

const StyledWrapper = styled.section`
    row-gap: 2.5rem;
    padding: 5rem 3rem 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90rem;
    width: 100%;
`

const StyledLinkWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ positionStart }) =>
        positionStart ? 'flex-start' : 'flex-end'};
    align-items: center;

    ${({ theme }) => theme.mq.tabletM} {
        width: 50%;
        justify-content: flex-start;
        margin-left: ${({ positionStart }) => (positionStart ? '0' : 'auto')};
    }
`

const LinkSection = ({ label, slug, positionStart, children }) => {
    return (
        <StyledWrapper>
            {children}
            <StyledLinkWrapper positionStart={positionStart}>
                <Link slug={slug}>{label}</Link>
            </StyledLinkWrapper>
        </StyledWrapper>
    )
}

LinkSection.propTypes = {
    label: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    positionStart: PropTypes.bool,
    children: PropTypes.node,
}

LinkSection.defaultProps = {
    label: '',
    slug: '#',
    positionStart: false,
}

export default LinkSection