import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Code } from '../index'
import PropTypes from 'prop-types'

const strongAnimation = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
  }
  25% {
    transform: scale(1.02) translate(0, 0);
  }
  50% {
    transform: scale(1.02) translate(0, 0);
  }
  75% {
    transform: scale(1.02) translate(0, 0);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
`

const StyledContent = styled.section`
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;

    h1,
    h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    h3 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    h4,
    h5,
    h6 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    h1,
    h2,
    em,
    i,
    b,
    strong {
        color: ${({ theme }) => theme.color.accent};
    }

    p,
    ul li,
    ol li {
        font-size: 1.25rem;
        line-height: 160%;
    }

    blockquote {
        display: flex;
        position: relative;
        padding: 0 0 0 2.5rem;
        margin: 0;

        p {
            margin-bottom: 0;
            font-style: italic;
            font-size: 1.5rem;
        }

        ::after {
            content: '';
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            width: 1rem;
            height: 100%;
            background-color: ${({ theme }) => theme.color.accent};
        }
    }

    p,
    blockquote,
    pre,
    table,
    ul,
    ol,
    img {
        margin-bottom: 5vw;
    }

    ul {
        ul,
        ol,
        li p {
            margin-bottom: 0;
        }
    }

    ol {
        ul,
        ol,
        li p {
            margin-bottom: 0;
        }
    }

    pre,
    code {
        font-family: 'JetBrains Mono', monospace;
    }

    iframe {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16 / 9;
    }

    img {
        display: flex;
        width: 100%;
    }

    a {
        font-weight: 700;
        color: ${({ theme }) => theme.color.backgroundPrimary};
        background-color: ${({ theme }) => theme.color.primary};
        text-decoration: underline;
        border-radius: 0.25rem;
        padding: 0.125rem 0.5rem;
    }

    strong a {
        font-weight: inherit !important;
        color: inherit !important;
        background-color: inherit !important;
        border-radius: 0 !important;
        padding: 0 !important;
    }

    ol,
    ul {
        padding-left: 1.75rem;
    }

    table {
        border: 0.25rem solid ${({ theme }) => theme.color.primary};

        td {
            border: 0.25rem solid ${({ theme }) => theme.color.primary};
            padding: 0.25rem 0.5rem;
        }
    }

    strong {
        display: inline-flex;
        padding: 0 0.25rem;
        transition: transform linear;
        animation: ${strongAnimation} 5s 0s infinite;
    }
`

const Content = ({ children }) => {
    return (
        <StyledContent>
            <Code>{children}</Code>
        </StyledContent>
    )
}

Content.propTypes = {
    children: PropTypes.node,
}

export default Content
