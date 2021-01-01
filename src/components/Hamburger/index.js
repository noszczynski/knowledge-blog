import React from 'react'
import styled, { css } from 'styled-components'

const StyledWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: -2 / -1;
    text-align: right;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    margin: 0 auto;
    cursor: pointer;

    ${({ theme }) => theme.mq.tabletM} {
        display: none;
    }
`

const StyledSpan = styled.span`
    position: relative;
    width: 100%;
    display: block;
    height: 100%;

    :after,
    :before {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        height: 4px;
        background-color: #fff;
        transition: transform 0.15s ease-in-out;
    }

    :after {
        top: 0.5rem;
    }

    :before {
        bottom: 0.5rem;
    }

    ${StyledWrapper}:hover & {
        :after {
            transform: translateX(0.2rem);
        }

        :before {
            transform: translateX(-0.2rem);
        }
    }

    ${({ isOpen }) =>
        isOpen &&
        css`
            :after {
                transform: rotate(45deg) translate(0.25rem, 0.25rem) !important;
            }

            :before {
                transform: rotate(-45deg) translate(0.25rem, -0.25rem) !important;
            }
        `}
`

const Hamburger = ({ isOpen, click }) => {
    return (
        <StyledWrapper onClick={click}>
            <StyledSpan isOpen={isOpen} />
        </StyledWrapper>
    )
}

export default Hamburger
