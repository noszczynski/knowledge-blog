import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Heading, Image, NoImagePlaceholder, Paragraph } from '../index'
import PropTypes from 'prop-types'
import { truncate } from '../../utils/utils'

const StyledWrapper = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    :hover {
        transform: translateY(-1rem) translateZ(0);
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    height: 480px;
    overflow: hidden;

    & > div {
        height: 100%;
        width: 100%;
    }

    img {
        object-fit: cover;
    }

    ${StyledWrapper}:hover & {
        & > div {
            transform: scale(1.2);
        }
    }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Tile = ({ title, content, author, slug, cover }) => {
    return (
        <Link to={slug}>
            <StyledWrapper>
                <StyledImageWrapper>{cover && cover.fluid ? <Image fluid={cover.fluid} /> : <NoImagePlaceholder />}</StyledImageWrapper>
                <StyledContent>
                    {title && <Heading variant={'h3'}>{title}</Heading>}
                    {author && author.name && <Heading variant={'h5'}>{author.name}</Heading>}
                    {content && <Paragraph>{truncate(content, 256)}</Paragraph>}
                </StyledContent>
            </StyledWrapper>
        </Link>
    )
}

Tile.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    slug: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
    }),
    fluid: PropTypes.any,
}

Tile.defaultProps = {
    title: undefined,
    content: undefined,
    slug: undefined,
    fluid: null,
    author: {
        name: '',
    },
}

export default Tile
