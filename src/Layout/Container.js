import React from 'react'
import styled from 'styled-components'
import { containers, mq } from '../utils/breakpoints'

const generateMedia = () => {
    let str = ''
    const queries = Object.assign({}, mq)

    for (const device in queries) {
        if (Object.prototype.hasOwnProperty.call(queries, device)) {
            const w = containers[device]

            if (w !== 0) {
                const query = `
                    ${mq[device]}{
                        max-width: ${w}px; 
                        width: ${w}px;
                        padding: ${w < 1024 ? '0 0.5rem' : '0 1rem'};
                    }
                `
                str = str.concat(query)
            }
        }
    }

    return str
}

const StyledWrapper = styled.div`
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;

    ${generateMedia()};
`

const Container = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

export default Container
