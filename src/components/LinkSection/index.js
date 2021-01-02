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
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const LinkSection = ({ label, slug, children }) => {
    return (
        <StyledWrapper>
            {children}
            <StyledLinkWrapper>
                <Link slug={slug}>{label}</Link>
            </StyledLinkWrapper>
        </StyledWrapper>
    )
}

LinkSection.propTypes = {
    label: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    children: PropTypes.node,
}

LinkSection.defaultProps = {
    label: '',
    slug: '#',
}

export default LinkSection
