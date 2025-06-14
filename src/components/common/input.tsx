'use client'

import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { DefaultTheme, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Container = styled.div`
    width: 100%;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
`

const StyledInput = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.borderRadius};
    border: ${({
        theme,
        $hasError,
    }: {
        theme: DefaultTheme
        $hasError?: boolean
    }) =>
        $hasError
            ? `1px solid ${({ theme }: { theme: DefaultTheme }) =>
                  theme.colors.text.error}`
            : theme.components.form.border};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
    background-color: white;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.components.button.bgPrimary};
    }

    &::placeholder {
        color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.components.button.bgSecondary};
        opacity: 0.7;
    }
`

const ErrorMessage = styled.div`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error};
    font-size: 14px;
    margin-top: 4px;
`

export const Input: React.FC<InputProps> = ({
    label,
    error,
    onChange,
    ...props
}) => {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <StyledInput $hasError={!!error} onChange={onChange} {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}
