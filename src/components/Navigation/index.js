import React from 'react'
import styled from 'styled-components'
import { Container, Hamburger, Logo, NavigationItem } from '../index'

const StyledWrapper = styled.nav`
    display: grid;
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 auto;
    padding-top: 1.5rem;
    align-items: start;
    position: relative;
    z-index: 100;

    ${({ theme }) => theme.mq.tabletS} {
        grid-column-gap: 1.5rem;
        padding-top: 4rem;

        div:last-child {
            grid-column: span 2;
        }
    }
`

const StyledNavigation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    padding: 2rem;
    z-index: 10;
    transition: opacity 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    color: ${({ theme }) => theme.color.primary};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    ${({ theme }) => theme.mq.tabletM} {
        display: none;
    }
`

const StyledMobileNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;

    & > div {
        display: flex !important;
    }

    ${({ theme }) => theme.mq.tabletM} {
        display: none;
    }
`

const StyledMobileSocial = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const StyledMobileSocialList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    column-gap: 1rem;
    position: fixed;
    left: 2rem;
    bottom: 4rem;
`

const StyledMobileSocialItem = styled.li`
    margin-right: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.secondary};
`

const Navigation = ({ isOpen, toggleOpen }) => {
    const ITEMS = [
        {
            label: 'O mnie',
            slug: '/about',
        },
        {
            label: 'Blog',
            slug: '/blog',
        },
        {
            label: 'Projekty',
            slug: '/projekty',
        },
    ]

    const BOTTOM_ITEMS = [
        {
            label: 'Github',
            slug: '/about',
        },
        {
            label: 'Facebook',
            slug: '/blog',
        },
        {
            label: 'Linkedin',
            slug: '/projekty',
        },
        {
            label: 'E-mail',
            slug: '/mail',
        },
    ]

    return (
        <Container>
            <StyledWrapper>
                <Logo isLink />
                <Hamburger isOpen={isOpen} click={toggleOpen} />
                {ITEMS.map(item => (
                    <NavigationItem key={item.slug} {...item} />
                ))}
                <NavigationItem label={'adam.noszczynski@gmail.com'} slug={'mailto:adam.noszczynski@gmail.com'} isMail />
            </StyledWrapper>
            <StyledNavigation isOpen={isOpen}>
                <StyledMobileNavigation>
                    {ITEMS.map(item => (
                        <NavigationItem key={item.slug} {...item} />
                    ))}
                    <NavigationItem label={'Contact'} slug={'/contact'} isMobile />
                </StyledMobileNavigation>
                <StyledMobileSocial>
                    <StyledMobileSocialList>
                        {BOTTOM_ITEMS.map(({ label, slug }) => (
                            <StyledMobileSocialItem href={slug} key={slug}>
                                {label}
                            </StyledMobileSocialItem>
                        ))}
                    </StyledMobileSocialList>
                </StyledMobileSocial>
            </StyledNavigation>
        </Container>
    )
}

export default Navigation
