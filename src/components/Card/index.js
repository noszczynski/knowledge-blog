import React from 'react'
import styled from 'styled-components'
import { Heading, Image, Paragraph } from '../index'
import { Link } from 'gatsby'

const StyledWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    text-decoration: none;

    ${({ theme }) => theme.mq.tabletS} {
        margin-bottom: 6rem;
    }

    :hover {
        transform: translateY(-2rem) translateZ(0);
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;

    & > div {
        aspect-ratio: 1 / 1;
        height: 100%;
        transition: transform 0.3s ease;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        display: block;
    }

    ${StyledWrapper}:hover & {
        & > div {
            transform: scale(1.2);
        }
    }
`

const StyledContent = styled.div`
    p {
        font-size: 1rem;
        font-weight: 500;
        line-height: calc(1em + 0.5rem);
    }
`

const Card = ({ title, cover, description, slug }) => {
    return (
        <StyledWrapper to={`/projekty/${slug}`}>
            <StyledImageWrapper>
                <Image fluid={cover.fluid} />
            </StyledImageWrapper>
            <StyledContent>
                <Heading variant={'h3'}>{title}</Heading>
                <Paragraph>{description}</Paragraph>
            </StyledContent>
        </StyledWrapper>
    )
}

Card.propTypes = {}

export default Card
