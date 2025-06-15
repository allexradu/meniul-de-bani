'use client'

import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

export const ButtonWrapper = styled.div`
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[2]};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ButtonStyle = styled.button<{ $isPromo?: boolean }>`
    background-color: ${({
        theme,
        $isPromo,
    }: {
        theme: DefaultTheme
        $isPromo?: boolean
    }) =>
        $isPromo
            ? theme.colors.components.button.danger
            : theme.colors.components.button.bgPrimary};
    color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.primary};
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[3]}
        ${({ theme }: { theme: DefaultTheme }) => theme.sizes[2]};
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.button};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.semiBold};
    border: none;
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.button.borderRadius};
    cursor: pointer;
    width: 50%;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;

    &:hover {
        background-color: ${({
            theme,
            $isPromo,
        }: {
            theme: DefaultTheme
            $isPromo?: boolean
        }) =>
            $isPromo
                ? theme.colors.components.button.dangerHover
                : theme.colors.components.button.bgSecondary};
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }: { theme: DefaultTheme }) =>
            theme.fontSizes.buttonMobile};
        padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[2]}
            ${({ theme }: { theme: DefaultTheme }) => theme.sizes[1]};
    }
`

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isPromo?: boolean
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    isPromo,
    children,
    ...props
}) => {
    return (
        <ButtonStyle $isPromo={isPromo} {...props}>
            {children}
        </ButtonStyle>
    )
}
