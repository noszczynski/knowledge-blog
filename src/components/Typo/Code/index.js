import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCodeWrapper = styled.div`
    pre {
        padding: 2rem;
        background: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.backgroundPrimary};
        border-radius: 1rem;
        font-size: 1.25rem;

        code {
            display: block;
        }

        &.language-javascript {
            span {
                &.keyword {
                    &-function {
                        color: red;
                    }

                    &-const,
                    &-let,
                    &-var {
                        color: green;
                    }

                    &-varible_name {
                        color: coral;
                    }

                    &-variable_content {
                        color: blue;
                    }
                }
            }
        }

        &.language-css {
        }

        &.language-html {
        }
    }
`

const Index = ({ children }) => {
    return <StyledCodeWrapper>{children}</StyledCodeWrapper>
}

Index.propTypes = {
    children: PropTypes.node,
}

export default Index
