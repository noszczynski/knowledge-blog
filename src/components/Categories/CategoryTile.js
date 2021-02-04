import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Heading } from '../index'
import { truncate } from '../../utils/utils'
import { FiberNew } from '@material-ui/icons'

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
    background-color: ${({ themeColor, theme }) => themeColor || theme.color.primary}80;
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 2rem;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
`

const StyledIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    ${StyledWrapper}:hover & {
        transform: scale(0.85);
    }
`

const StyledNew = styled.i`
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    z-index: 9;
`

const StyledParagraph = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 150%;
`

const StyledAccentParagraph = styled(StyledParagraph)`
    color: ${({ theme }) => theme.color.accent};
`

const CategoryTile = ({ slug, title, icon, theme, description, posts, new: isNew }) => {
    return (
        <Link to={slug}>
            <StyledWrapper>
                <StyledNew isNew={isNew}>
                    <FiberNew />
                </StyledNew>
                <StyledThemeWrapper themeColor={theme && theme.hex}>
                    <StyledIcon src={icon && icon.url} />
                </StyledThemeWrapper>
                <StyledContent>
                    {title && <Heading variant={'h3'}>{title}</Heading>}
                    <StyledAccentParagraph>Postów: {posts && posts.length}</StyledAccentParagraph>
                    {description && <StyledParagraph>{truncate(description, 256)}</StyledParagraph>}
                </StyledContent>
            </StyledWrapper>
        </Link>
    )
}

CategoryTile.propTypes = {
    children: PropTypes.node,
}

CategoryTile.defaultProps = {}

export default CategoryTile
