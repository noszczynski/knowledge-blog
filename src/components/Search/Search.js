import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Paragraph } from '../index'

const StyledWrapper = styled.div`
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 30rem;
    width: 100%;
    max-width: 100%;

    ${({ theme }) => theme.mq.tabletM} {
        padding: 5rem 3rem;
    }
`

const StyledSearchInput = styled.input`
    background: transparent;
    padding: 1rem;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 0.25rem solid ${({ theme }) => theme.color.primary};
    width: 100%;

    ::placeholder {
        color: ${({ theme }) => theme.color.secondary};
        font-size: 1.5rem;
    }

    :focus {
        outline: none;
    }

    ${({ theme }) => theme.mq.tabletM} {
        border-bottom: none;
        width: auto;
    }
`

const StyledSearch = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    border-bottom: 0.25rem solid transparent;
    width: 100%;
    margin-right: auto;
    height: 12rem;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.mq.tabletM} {
        border-bottom-color: ${({ theme, isFocused }) => (isFocused ? theme.color.primary : theme.color.secondary)};
        flex-direction: row;
        height: 8rem;
        width: auto;
    }
`

const StyledSearchSubmit = styled.button`
    color: ${({ theme }) => theme.color.accent};
    font-size: 1.5rem;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin: 0;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.backgroundPrimary};
    padding: 0.5rem 1rem;

    ${({ theme }) => theme.mq.tabletM} {
        width: auto;
        margin-left: 3rem;
        margin-right: auto;
        background-color: transparent;
        padding: 0.75rem 0.25rem;
        color: ${({ theme }) => theme.color.accent};
    }
`

const Search = ({ title, onFilter, field, children }) => {
    const [value, setValue] = useState('')
    const inputRef = useRef()

    const handleSubmit = term => {
        onFilter(term, field)
    }

    const handleClick = () => {
        handleSubmit(value)
    }

    const handleChange = e => {
        if (e && e.target) {
            const newValue = e.target.value

            setValue(newValue)
            handleSubmit(newValue)
        }
    }

    return (
        <StyledWrapper>
            {title && <Heading variant={'h1'}>{title}</Heading>}
            {children && <Paragraph>{children}</Paragraph>}
            <StyledSearch isFocused={document.activeElement === (inputRef && inputRef.current)}>
                <StyledSearchInput ref={inputRef} value={value} onChange={handleChange} placeholder={'search...'} />
                <StyledSearchSubmit onClick={handleClick}>Search</StyledSearchSubmit>
            </StyledSearch>
        </StyledWrapper>
    )
}

Search.propTypes = {
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onFilter: PropTypes.func,
    children: PropTypes.node,
}

Search.defaultProps = {
    title: '',
    field: '',
}

export default Search
