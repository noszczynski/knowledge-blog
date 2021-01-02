import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { LogoSVG, Paragraph } from '../index'

const StyledWrapper = styled.footer`
    max-width: 90rem;
    width: 100%;
`

const StyledLogoWrapper = styled.div`
    grid-column: span 1;

    svg {
        height: 100%;
        width: 100%;
    }
`

const StyledNameWrapper = styled.div`
    grid-column: 2 / span 3;
    color: ${({ theme }) => theme.color.secondary};
`

const StyledListWrapper = styled.div`
    grid-column: 5 / span 2;

    :last-child {
        grid-column: 7 / span 2;
    }
`

const StyledList = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const StyledListItem = styled.li`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.secondary};

    :last-child {
        margin-bottom: 0;
    }

    a {
        color: inherit;
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`

const StyledNavigation = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 2.5rem;
    grid-column: 1 / -1;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    padding: 5rem 1rem 0;
    align-items: flex-start;
`

const StyledRights = styled.div`
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
    const SOCIAL_ITEMS = [
        { label: 'Github', slug: '#bb' },
        { label: 'Linkedin', slug: '#aa' },
        { label: 'Facebook', slug: 'https://fb.com/a.noszczynski14' },
        { label: 'E-mail', slug: 'mailto:adam.noszczynski@gmail.com' },
    ]

    const NAVIGATION_ITEMS = [
        { label: 'Home', slug: '/' },
        { label: 'About', slug: '/about' },
        { label: 'Blog', slug: '/categories' },
        { label: 'Portfolio', slug: '/projects' },
    ]

    return (
        <StyledWrapper>
            <StyledNavigation>
                <StyledLogoWrapper>{LogoSVG}</StyledLogoWrapper>
                <StyledNameWrapper>Adam Noszczyński</StyledNameWrapper>
                <StyledListWrapper>
                    <StyledList>
                        {SOCIAL_ITEMS.map(({ label, slug }) => (
                            <StyledListItem key={slug}>
                                <Link to={slug}>{label}</Link>
                            </StyledListItem>
                        ))}
                    </StyledList>
                </StyledListWrapper>
                <StyledListWrapper>
                    <StyledList>
                        {NAVIGATION_ITEMS.map(({ label, slug }) => (
                            <StyledListItem key={slug}>
                                <Link to={slug}>{label}</Link>
                            </StyledListItem>
                        ))}
                    </StyledList>
                </StyledListWrapper>
            </StyledNavigation>
            <StyledRights>
                <Paragraph>
                    &copy; {new Date().getFullYear()} Adam Noszczyński
                </Paragraph>
            </StyledRights>
        </StyledWrapper>
    )
}

export default Footer
