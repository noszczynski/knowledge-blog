import React from 'react'
import { Paragraph } from '../index'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    padding: 5rem 0 0;

    ${({ theme }) => theme.mq.tabletM} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.75rem;
        row-gap: 3rem;
    }

    ${({ theme }) => theme.mq.laptopL} {
        grid-template-columns: repeat(3, 1fr);
    }

    ${({ theme }) => theme.mq.desktopM} {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Grid = ({ items, filteredItems, component: Component }) => {
    return (
        <>
            <StyledWrapper>
                {items && filteredItems && filteredItems.map((item, index) => <Component key={index} {...item} />)}
            </StyledWrapper>
            {items && items.length > 0 ? (
                filteredItems && filteredItems.length === 0 && <Paragraph>No search items</Paragraph>
            ) : (
                <Paragraph>No items</Paragraph>
            )}
        </>
    )
}

Grid.propTypes = {}

export default Grid
