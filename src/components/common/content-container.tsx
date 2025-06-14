'use client'
import React from 'react'
import { DefaultTheme, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

interface ContentContainerProps {
    children?: React.ReactNode
    title?: string
    isPromo?: boolean
}

const Container = styled.div<{ $isPromo?: boolean }>`
    width: 100%;
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.SMALL]};
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        theme.components.form.borderRadius};
    border: ${({
        theme,
        $isPromo,
    }: {
        theme: DefaultTheme
        $isPromo?: boolean
    }) =>
        $isPromo
            ? `1px solid ${theme.colors.components.button.danger}`
            : theme.components.form.border};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const TitleBar = styled.div<{ $isPromo?: boolean }>`
    padding: ${({ theme }: { theme: DefaultTheme }) => theme.sizes[Size.SMALL]};
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
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.bold};
    display: flex;
    align-items: center;
    border-radius: ${({ theme }: { theme: DefaultTheme }) =>
        `${theme.components.form.borderRadius} ${theme.components.form.borderRadius} 0 0`};
`

const Content = styled.div`
    padding: 12px 16px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
`

export const TextContainer = styled.div`
    p {
        margin: 0 0 12px 0;
        line-height: 1.6;
    }

    ul {
        margin: 0 0 16px 20px;
        padding: 0;
        list-style: disc inside;
    }

    li {
        margin-bottom: 6px;
        line-height: 1.5;
    }
`

export const ContentContainer: React.FC<ContentContainerProps> = ({
    children,
    title,
    isPromo,
}) => {
    return (
        <Container $isPromo={isPromo}>
            {title && <TitleBar $isPromo={isPromo}>{title}</TitleBar>}
            <Content>
                <TextContainer>{children}</TextContainer>
            </Content>
        </Container>
    )
}
