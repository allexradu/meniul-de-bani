'use client'

import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { ErrorMessage } from '@comp/common/error-mesage'

const CheckboxContainer = styled.div<{ $hasError?: boolean }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

const CheckboxRow = styled.div`
    display: flex;
    align-items: flex-start;
`

const CheckboxInput = styled.input<{ $hasError?: boolean }>`
    margin-right: 0.5rem;
    margin-top: 0.25rem;

    ${({ $hasError }) =>
        $hasError &&
        `
        outline: 2px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error || 'red'};
    `}
`

const Label = styled.label<{ $hasError?: boolean }>`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.text || '1rem'};

    ${({ $hasError }) =>
        $hasError &&
        `
        color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error};
    `}
`

interface CheckboxProps {
    label: string | React.ReactNode
    name: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    error?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    name,
    checked,
    onChange,
    required = false,
    error,
}) => {
    const hasError = !!error

    return (
        <CheckboxContainer $hasError={hasError}>
            <CheckboxRow>
                <CheckboxInput
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    required={required}
                    $hasError={hasError}
                />
                <Label htmlFor={name} $hasError={hasError}>
                    {label}
                </Label>
            </CheckboxRow>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </CheckboxContainer>
    )
}
