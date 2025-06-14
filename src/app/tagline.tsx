'use client'

import React from 'react'
import { DefaultTheme, styled } from 'styled-components'

import { Size } from '@infra/constants/enums'

export const TaglineComponent = styled.h1`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.tagLine};
    font-weight: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontWeights.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    text-align: center;
`

export const Tagline: React.FC = () => {
    return (
        <TaglineComponent>
            Terminatorul de Insecte - Servicii Profesionale de Deratizare,
            Dezinsecție și Dezinfectare
        </TaglineComponent>
    )
}
