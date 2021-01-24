import React from 'react'
import { Link } from 'gatsby'
import { FiberNew } from '@material-ui/icons'
import { Heading, Image } from '../../components'
import { truncate } from '../../utils/utils'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;

    :hover {
        transform: translateY(-1rem) translateZ(0);
    }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledThemeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
`

const StyledCover = styled.div`
    height: 100%;
    width: 100%;

    ${StyledWrapper}:hover & {
        transform: scale(1.05);
    }

    div {
        height: 100%;
    }

    img {
        height: 100%;
        width: 100%;
    }
`

const StyledNew = styled.i`
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    z-index: 10;
`

const StyledParagraph = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 150%;
`

const PostTile = ({ title, cover, slug, summary, new: isNew }) => {
    return (
        <Link to={slug}>
            <StyledWrapper>
                <StyledNew isNew={isNew}>
                    <FiberNew />
                </StyledNew>
                <StyledThemeWrapper>
                    <StyledCover>
                        <Image fluid={cover && cover.fluid} />
                    </StyledCover>
                </StyledThemeWrapper>
                <StyledContent>
                    {title && <Heading variant={'h3'}>{title}</Heading>}
                    {summary && <StyledParagraph>{truncate(summary, 128)}</StyledParagraph>}
                </StyledContent>
            </StyledWrapper>
        </Link>
    )
}

PostTile.propTypes = {}

export default PostTile
