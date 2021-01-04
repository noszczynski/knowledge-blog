import React from 'react'
import styled from 'styled-components'
import { Heading, Image, Paragraph } from '../index'

const StyledWrapper = styled.div``
const StyledImageWrapper = styled.div``
const StyledContent = styled.div``

const Card = ({ title, cover, description, locale }) => {
    return (
        <StyledWrapper>
            <StyledImageWrapper>
                <Image fluid={cover.fluid} />
            </StyledImageWrapper>
            <StyledContent>
                <Heading variant={'h3'}>
                    {title} {locale}
                </Heading>
                <Paragraph>{description}</Paragraph>
            </StyledContent>
        </StyledWrapper>
    )
}

Card.propTypes = {}

export default Card
