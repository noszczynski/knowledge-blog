import React from 'react'
import styled from 'styled-components'

import { Card, Paragraph } from '../index'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.mq.tabletS} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;

        & > div:nth-child(2) {
            margin-top: 8rem;
        }
    }
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const Cards = ({ cards }) => {
    return cards && cards.length ? (
        <StyledWrapper>
            <StyledColumn>
                {cards &&
                    cards.map(
                        (card, idx) =>
                            idx % 2 === 0 && (
                                <Card
                                    key={card.title + card.locale}
                                    {...card}
                                />
                            )
                    )}
            </StyledColumn>
            <StyledColumn>
                {cards &&
                    cards.map(
                        (card, idx) =>
                            idx % 2 !== 0 && (
                                <Card
                                    key={card.title + card.locale}
                                    {...card}
                                />
                            )
                    )}
            </StyledColumn>
        </StyledWrapper>
    ) : (
        <Paragraph>No items</Paragraph>
    )
}

export default Cards
