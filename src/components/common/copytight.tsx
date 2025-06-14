'use client'

import Link from 'next/link'
import React from 'react'
import { DefaultTheme, styled, ThemeProvider } from 'styled-components'

import { Size } from '@infra/constants/enums'
import { theme } from '@infra/theme'

export const FooterComponent = styled.div`
    font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.copyright};
    margin-top: ${({ theme }: { theme: DefaultTheme }) =>
        theme.sizes[Size.MEDIUM]};
    text-align: center;

    a {
        color: ${({ theme }: { theme: DefaultTheme }) =>
            theme.colors.text.link};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Footer: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <FooterComponent>
                    Copyright &copy; 2025 S.C. David Marian DDD Brand S.R.L.
                    {' | '}
                    <Link href="mailto:contact@terminatorul.eu">
                        Contactează-ne
                    </Link>{' '}
                </FooterComponent>
                <FooterComponent>
                    <Link href="/policy">Politica de confidențialitate.</Link>
                </FooterComponent>

                <FooterComponent>
                    Designed by{' '}
                    <Link href="https://radergy.ro">Radergy S.R.L.</Link>
                </FooterComponent>
            </div>
        </ThemeProvider>
    )
}
