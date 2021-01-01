import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const StyledWrapper = styled.div`
    display: block;
    grid-column: span 1;
    padding-top: 1.25rem;
`

const link = css`
    transition: none 0s ease 0s;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    line-height: calc(1em + 0.25rem);
    color: ${({ theme }) => theme.color.primary};
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 1px;

    ${({ theme }) => theme.mq.tabletM} {
        color: ${({ theme }) => theme.color.secondary};
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0;
    }
`

const StyledLink = styled(Link)`
    ${link}
`

const StyledButton = styled.a`
    ${link}
`

const NavigationItem = ({ label, slug, isMail }) => {
    return (
        <StyledWrapper>
            {isMail ? (
                <StyledButton href={slug}>{label}</StyledButton>
            ) : (
                <StyledLink to={slug}>{label}</StyledLink>
            )}
        </StyledWrapper>
    )
}

export default NavigationItem
