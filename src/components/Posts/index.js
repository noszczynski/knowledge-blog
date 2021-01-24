import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Tile } from '../index'

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tabletM} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`

const Posts = ({ items }) => {
    return (
        <StyledWrapper>
            {items &&
                items.length &&
                items.map(({ title, summary, cover, slug, author, id, category, new: isNew }) => (
                    <Tile
                        title={title}
                        content={summary}
                        cover={cover}
                        slug={`blog/${category.slug}/${slug}`}
                        isNew={isNew}
                        author={author}
                        key={id}
                    />
                ))}
        </StyledWrapper>
    )
}

Posts.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            new: PropTypes.bool,
            title: PropTypes.string,
            id: PropTypes.string,
            author: PropTypes.shape({
                name: PropTypes.string,
                id: PropTypes.string,
                avatar: PropTypes.shape({
                    alt: PropTypes.string,
                    url: PropTypes.string,
                }),
            }),
            category: PropTypes.shape({
                title: PropTypes.string,
                slug: PropTypes.string,
                new: PropTypes.bool,
            }),
            slug: PropTypes.string,
            locale: PropTypes.string,
            cover: PropTypes.shape({
                alt: PropTypes.string,
                url: PropTypes.string,
                fluid: PropTypes.object,
            }),
        })
    ),
}

export default Posts
