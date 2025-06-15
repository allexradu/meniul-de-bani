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
                    „Meniul de Bani” este un produs realizat în parteneriat
                    între <Link href="https://radergy.ro">Radergy S.R.L.</Link>{' '}
                    și{' '}
                    <Link href="https://creaseline.ro">
                        Creaseline Solutions S.R.L.
                    </Link>
                </FooterComponent>
                <FooterComponent>
                    Disclaimer: Cu soluția noastră, restaurantele pot obține o
                    creștere semnificativă a veniturilor, inclusiv până la
                    dublarea acestora, în funcție de modul de implementare,
                    contextul afacerii și alți factori specifici. Nu facem nicio
                    garanție cu privire la sumele exacte pe care le vei obține,
                    în afara celor stipulate în mod expres în contract.
                </FooterComponent>
                <FooterComponent>
                    <Link href="/privacy">Politica de confidențialitate.</Link>
                </FooterComponent>

                <FooterComponent>
                    Designed by{' '}
                    <Link href="https://radergy.ro">Radergy S.R.L.</Link>
                </FooterComponent>
                <FooterComponent>
                    Copyright &copy; 2025 Radergy S.R.L.
                    {' | '}
                    <Link href="mailto:contact@radergy.ro">
                        Contactează-ne
                    </Link>{' '}
                </FooterComponent>
            </div>
        </ThemeProvider>
    )
}
