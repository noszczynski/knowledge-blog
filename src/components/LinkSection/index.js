import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from '../index'

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

const StyledLinkWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ positionStart }) => (positionStart ? 'flex-start' : 'flex-end')};
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
            {slug && (
                <StyledLinkWrapper positionStart={positionStart}>
                    {label && slug ? <Link slug={slug}>{label}</Link> : null}
                </StyledLinkWrapper>
            )}
        </StyledWrapper>
    )
}

LinkSection.propTypes = {
    label: PropTypes.string.isRequired,
    slug: PropTypes.string,
    positionStart: PropTypes.bool,
    children: PropTypes.node,
}

LinkSection.defaultProps = {
    label: '',
    slug: undefined,
    positionStart: false,
}

export default LinkSection
