import React from 'react'
import styled from 'styled-components'
import { Image } from '@material-ui/icons'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.noImageColor};
    color: ${({ theme }) => theme.color.primary};

    svg {
        color: inherit;
    }
`

const NoImagePlaceholder = () => {
    return (
        <StyledWrapper>
            <Image />
        </StyledWrapper>
    )
}

export default NoImagePlaceholder
