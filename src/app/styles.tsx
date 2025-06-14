'use client'

import React from 'react'
import { DefaultTheme, keyframes, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

export const ImageWrapper = styled.div`
    width: 100%;
    margin-top: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    max-width: 600px;
    position: relative;
    height: 300px;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.borderRadius};
    box-shadow: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.form.boxShadow};
    margin-top: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
    border: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.border};
`

export const Input = styled.input`
    width: 100%;
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
    margin: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]} 0;
    border: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.input.border};
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.input.borderRadius};
    box-shadow: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.input.boxShadow};
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.input};
`

export const Label = styled.label`
    width: 100%;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.XSMALL]};
    font-weight: bold;
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.inputLabel};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
`

export const ButtonComponent = styled.button`
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]}
        ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
    margin-top: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
    border: none;
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.button.borderRadius};
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.bgPrimary};
    color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.components.button.primary};
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.input};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.components.button.bgSecondary};
    }

    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    type: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    disabled,
    ...rest
}) => {
    return (
        <ButtonComponent type={type} disabled={disabled} {...rest}>
            {children}
        </ButtonComponent>
    )
}

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]} 0;
    justify-content: center;
`

export const Checkbox = styled.input`
    margin-right: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
`

export const CheckboxLabel = styled.label`
    font-size: 14px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};

    a {
        color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.text.link};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Subtitle = styled.div`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.subTitle};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.regular};
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    text-align: center;
`

export const Description = styled.div`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.description};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.regular};
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    text-align: left;
    padding-left: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    padding-right: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
`

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

export const ComingSoon = styled.div`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.tagLine};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
    text-align: center;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
    animation: ${blink} 2s infinite;
`

export const ErrorText = styled.div`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.error};
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
`
