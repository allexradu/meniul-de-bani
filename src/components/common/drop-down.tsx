'use client'

import React, { ChangeEvent, SelectHTMLAttributes } from 'react'
import { DefaultTheme, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

export interface DropDownItem {
    key: string | number
    value: string
}

interface DropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    error?: string
    items: DropDownItem[]
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
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

const StyledSelect = styled.select<{ $hasError?: boolean }>`
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
    }) => ($hasError ? '1px solid red' : theme.components.form.border)};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
    background-color: white;
    font-size: 16px;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6"><path fill="%23666" d="M0 0l6 6 6-6z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;

    &:focus {
        outline: none;
        border-color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.components.button.bgPrimary};
    }
`

const ErrorMessage = styled.div`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error};
    font-size: 14px;
    margin-top: 4px;
`

export const DropDown: React.FC<DropDownProps> = ({
    label,
    error,
    items,
    onChange,
    ...props
}) => {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <StyledSelect $hasError={!!error} onChange={onChange} {...props}>
                <option value={''}>Selectează</option>
                {items.map((item) => (
                    <option key={item.key} value={item.key}>
                        {item.value}
                    </option>
                ))}
            </StyledSelect>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}
